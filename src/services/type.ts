export interface LinksProps {
    id: string;
    name: string;
    slug?: string;
    order?: number;
    children: {
      id: string;
      name: string;
      slug: string;
      order: number;
      sub_children: {
        name: string;
        slug: string;
        order: number;
      }[];
    }[];
    top_sellers: {
      name: string;
      slug: string;
      description: string;
      picture_src: string;
    }[];
  }
  
  export interface SearchPropsPt {
    name: string;
    short_explanation: string;
    slug: string;
    price_info: {
      profit: null | number;
      total_price: number;
      discounted_price: number | null;
      price_per_servings: number;
      discount_percentage: number | null;
    };
    photo_src: string;
    comment_count: number;
    average_star: number;
    id: string;
  }