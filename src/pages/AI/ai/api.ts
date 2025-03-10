/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoogleGenerativeAI } from "@google/generative-ai";
import { base_url } from "../../../components/Bestseller/BestsellerPage";

interface PriceInfo {
    profit?: null;
    total_price: number;
    discounted_price?: number | null;
    price_per_servings?: number;
    discount_percentage?: number | null;
}

interface BestsellerProps {
    name: string;
    short_explanation: string;
    slug: string;
    price_info: PriceInfo;
    photo_src: string;
    comment_count?: number;
    average_star: number;
}

export interface AIResponse {
  response: string;
  error?: string;
}

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function AlLoader(page = 1) {
  const limit = 12;
  const offset = (page - 1) * limit;
  const response = await fetch(base_url + `/products?limit=${limit}&offset=${offset}`);
  const dataAll = await response.json();
  return { data: dataAll.data.results as BestsellerProps[] };
}

function createContext(message: string, history: unknown[], data: BestsellerProps[]) {
  return `Sen bir alışveriş asistanısın. Aşağıdaki kurallara göre yanıt vermelisin:
    
    📝 **Kullanıcının İsteği**  
    ━━━━━━━━━━━━━━━━━━━━━━━━━━  
      ${message}
    
    🛍️ **Önerilen Ürünler**  

    ${data
        .map((product, index) => 
          `${index + 1}. **${product.name}**  
      
          💰 **Fiyat:** ${product.price_info.total_price} TL  
      
          📱 **Öne Çıkan Özellikler:**  
          - ${product.short_explanation}  
      
          ✅ **Artıları:**  
          - Özellikler... (Özelleştirilebilir)
      
          ⚠️ **Eksileri:**  
          - Eksiler... (Özelleştirilebilir)
      
          📦 **Stok Durumu:** 50 adet (Varsayılan Stok)  
      
      ━━━━━━━━━━━━━━━━━━━━━━━━━━  
      `).join("\n")}
      
      💾 **Ürün Veritabanı:**  
      \`\`\`json
      ${JSON.stringify(data, null, 2)}
      \`\`\`
    
    💬 **Sohbet Geçmişi:**  
${history.map((msg: any) => `${msg.role}: ${msg.content}`).join('\n')}

❓ **Kullanıcı Sorusu:**  
${message}
`;
}

export async function handleAIRequest(message: string, history: any[] = [], page: number = 1): Promise<AIResponse> {
  if (!import.meta.env.VITE_GEMINI_API_KEY) {
    throw new Error("API anahtarı bulunamadı");
  }

  if (!message) {
    throw new Error("Mesaj boş olamaz");
  }

  try {
    const { data } = await AlLoader(page);

    const chat = model.startChat({
      history: history?.map((msg: any) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }],
      })) || [],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    });

    const context = createContext(message, history, data);
    const result = await chat.sendMessage(context);
    const response = await result.response;
    const text = await response.text();
    return { response: text };
  } catch (error: any) {
    if (error.message?.includes("429") || error.message?.includes("quota")) {
      throw new Error("API kullanım limiti aşıldı. Lütfen biraz bekleyip tekrar deneyin.");
    }
    throw error;
  }
}
