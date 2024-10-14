export interface Product {
    id: string;
    name: string;
    slug: string;
    short_explanation: string;
    explanation: {
        usage: string;
        features: string;
        description: string;
        nutritional_content: {
            ingredients: {
                aroma: null;
                value: string;
            }[];
            nutrition_facts: {
                ingredients: Ingredient[];
                portion_sizes: [];
            };
            amino_acid_facts: null;
        };
    };
    main_category_id: string;
    sub_category_id: string;
    tags: string[];
    variants: ProductVariant[];
    comment_count: number;
    average_star: number;
}

export interface ProductVariant {
    id: string;
    size: ProductVariantSize;
    aroma: string;
    price: {
        profit: null;
        total_price: number;
        discounted_price: null | number;
        price_per_servings: number;
        discount_percentage: null | number;
    };
    photo_src: string;
    is_available: boolean;
}

export interface ProductVariantSize {
    pieces: number;
    total_services: number;
    gram?: number;
}

export interface Ingredient {
    name: string;  
    amounts: string; 
  }