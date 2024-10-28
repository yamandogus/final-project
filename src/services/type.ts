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

  export interface CategoryProps{
    id: string;
    name: string;
    slug: string;
    order: number;
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

interface PriceInfo {
  profit?: null;
  total_price: number;
  discounted_price?: number | null;
  price_per_servings?: number;
  discount_percentage?: number | null;
}

export interface BestsellerPropsCS {
  name: string;
  short_explanation: string;
  price_info: PriceInfo;
  photo_src: string;
  comment_count?: number;
  average_star: number;
  slug: string,
}

export interface SimplifiedCategory {
  id: string;
  name: string;
  slug: string;
  childName?: string;
  childId?: string;
}