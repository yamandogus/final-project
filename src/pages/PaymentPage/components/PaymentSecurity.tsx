import { Box, Checkbox, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { LoaderData } from "../../../layout/Navbar/navbar";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const PaymentSecurity = () => {
  const [security, setSecurity] = useState(false);
  const [sales, setSales] = useState(false);
  const { user } = useLoaderData() as LoaderData;
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexWrap: "wrap",
          wordWrap: "break-word",
          gap: 0.5,
          mb: 2,
        }}
      >
        <Box>
          <Checkbox required /> Fatura adresim teslimat adresimle aynı.
        </Box>
        <Box>
          <Checkbox required />
          <a
            style={{ color: "green", cursor: "pointer" }}
            onClick={() => setSecurity(true)}
          >
            Gizlilik sözleşmemi
          </a>{" "}
          ve{" "}
          <a
            style={{ color: "green", cursor: "pointer" }}
            onClick={() => setSales(true)}
          >
            Satış sözleşmemi{" "}
          </a>
          okudum, onaylıyorum.
        </Box>
      </Box>
      <Modal open={security} onClose={() => setSecurity(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" component="h2" gutterBottom>
            Gizlilik Sözleşmesi
          </Typography>
          <Typography variant="body1" >
            1. Kişisel Verilerin Korunması
          </Typography>
          <Typography variant="body2" sx={{ ml: 2, mb: 2 }}>
            • Müşterilerimizin kişisel bilgileri (ad, adres, telefon, e-posta vb.) gizli tutulacaktır.
            • Veriler şifrelenmiş ve güvenli sistemlerde saklanacaktır.
            • Hiçbir durumda üçüncü taraflarla paylaşılmayacak veya satılmayacaktır.
          </Typography>
          
          <Typography variant="body1" >
            2. Veri Güvenliği ve Koruma Önlemleri
          </Typography>
          <Typography variant="body2" sx={{ ml: 2, mb: 2 }}>
            • SSL şifreleme teknolojisi ile verileriniz korunmaktadır.
            • Düzenli güvenlik denetimleri yapılmaktadır.
            • En son güvenlik yazılımları ve protokolleri kullanılmaktadır.
          </Typography>
          
          <Typography variant="body1" >
            3. Veri Kullanım Amacı
          </Typography>
          <Typography variant="body2" sx={{ ml: 2, mb: 2 }}>
            • Siparişlerinizin işlenmesi ve takibi
            • Ürün teslimatının sağlanması
            • Müşteri hizmetleri desteği
            • Yasal yükümlülüklerin yerine getirilmesi
          </Typography>
          
          <Typography variant="body1" >
            4. Müşteri Hakları
          </Typography>
          <Typography variant="body2" sx={{ ml: 2, mb: 2 }}>
            • Verilerinize erişim hakkı
            • Verilerinizin düzeltilmesini talep etme hakkı
            • Verilerinizin silinmesini talep etme hakkı
            • Veri işleme faaliyetlerine itiraz etme hakkı
          </Typography>
        </Box>
      </Modal>
      
      <Modal open={sales} onClose={() => setSales(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" component="h2" gutterBottom>
            Satış Sözleşmesi
          </Typography>
          <Typography variant="body1" >
            1. Sipariş ve Teslimat Koşulları
          </Typography>
          <Typography variant="body2" sx={{ ml: 2, mb: 2 }}>
            • Siparişler 1-3 iş günü içinde kargoya verilir
            • Teslimat süresi lokasyona göre 1-5 iş günüdür
            • Kargo takip numarası SMS ve e-posta ile iletilir
            • Teslimat adresi değişikliği kargo sürecine girmeden yapılabilir
          </Typography>

          <Typography variant="body1" >
            2. Ödeme ve Fiyatlandırma
          </Typography>
          <Typography variant="body2" sx={{ ml: 2, mb: 2 }}>
            • Tüm fiyatlara KDV dahildir
            • Kredi kartı, havale/EFT ve kapıda ödeme seçenekleri mevcuttur
            • Taksit seçenekleri banka ve kart türüne göre değişiklik gösterir
            • Fiyat değişikliği hakkı saklıdır
          </Typography>

          <Typography variant="body1" paragraph>
            3. İade ve Değişim Politikası
          </Typography>
          <Typography variant="body2" sx={{ ml: 2, mb: 2 }}>
            • 14 gün içinde koşulsuz iade hakkı
            • Ürünler kullanılmamış ve orijinal ambalajında olmalıdır
            • İade kargo ücreti firmamıza aittir
            • Para iadesi 5-7 iş günü içinde yapılır
          </Typography>

          <Typography variant="body1" >
            4. Garanti Koşulları
          </Typography>
          <Typography variant="body2" sx={{ ml: 2, mb: 2 }}>
            • Tüm ürünler 2 yıl garanti kapsamındadır
            • Kullanıcı hatası kaynaklı hasarlar garanti kapsamı dışındadır
            • Garanti süresi fatura tarihinden itibaren başlar
            • Servis hizmeti tüm Türkiye'de geçerlidir
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default PaymentSecurity;
