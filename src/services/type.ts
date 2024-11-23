export interface LinksProps {
  id: string;
  name: string;
  slug?: string; 
  order?: number; 
  children?: { 
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
  top_sellers?: {
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
  slug?: string,
}

export interface SimplifiedCategory {
  id: string;
  name: string;
  slug: string;
  childName?: string;
  childId?: string;
}

export interface Address {
  title: string;
  address: string;
  city: string;
  district: string;
  firstName: string;
  lastName: string;
  phone: string;
}
export interface AddressProps {
  title: string;
  country_id: number;
  region_id: number;
  subregion_id: number;
  full_address: string;
  phone_number: string;
}


export interface CityProps {
  id: number;
  name: string;
  country: {
    id: number;
    name: string;
  };
}


export interface DistrictProps {
  id: number;
  name: string;
  region: {
    id: number;
    name: string;
    country: {
      id: number;
      name: string;
    };
  };
}

export interface AddedAddress {
  id: string;
  title: string;
  country: {
    id: number;
    name: string;
  };
  region: {
    id: number;
    name: string;
    country: {
      id: number;
      name: string;
    };
  };
  full_address: string;
  phone_number: string;
  subregion: {
    id: number;
    name: string;
    region: {
      id: number;
      name: string;
      country: {
        id: number;
        name: string;
      };
    };
  }[];
};


export interface CityProps {
  id: number;
  name: string;
}
export interface DistrictProps {
  id: number;
  name: string;
}


export interface CartResponse {
  status: string;
  data: CartData;
}

interface CartData {
  total_price: number;
  items: CartItem[];
}

export interface CartItem {
  product_id: string;
  product_variant_id: string;
  product: string;
  product_variant_detail: ProductVariantDetail;
  pieces: number;
  unit_price: number;
  total_price: number;
}

interface ProductVariantDetail {
  size: Size;
  aroma: string;
  photo_src: string;
}

interface Size {
  gram: number;
  pieces: number;
  total_services: number;
}

export interface Order {
  order_no: string;
  order_status: string;
  shipment_tracking_number: string;
  address: Addresss;
  payment_detail: PaymentDetail;
  shopping_cart: ShoppingCart;
}

interface Addresss {
  title: string;
  country: string;
  region: string;
  subregion: string;
  full_address: string;
  phone_number: string;
}

interface PaymentDetail {
  card_digits: string;
  card_expiration_date: string; 
  card_security_code: string;
  payment_type: string;
  card_type: string;
  base_price: number;
  shipment_fee: number;
  payment_fee: number;
  discount_ratio: number;
  discount_amount: number;
  final_price: number;
}

interface ShoppingCart {
  total_price: number;
  items: ShoppingCartItem[];
}

interface ShoppingCartItem {
  product_id: string;
  product_variant_id: string;
  product_slug:string,
  product: string;
  product_variant_detail: ProductVariantDetail;
  pieces: number;
  unit_price: number;
  total_price: number;
}

interface ProductVariantDetail {
  size: Size;
  aroma: string;
  photo_src: string;
}

interface Size {
  gram: number;
  pieces: number;
  total_services: number;
}

interface Review {
  stars: string;
  comment: string;
  title: string;
  created_at: string;
  aroma: string;
  first_name: string;
  last_name: string;
}

export interface ReviewResponse {
  status: string;
  data: {
    count: number;
    next: string | null;
    previous: string | null;
    results: Review[];
  };
}

export interface CartItem {
  product_id: string;
  product_variant_id: string;
  product: string;
  product_variant_detail: {
    size: {
      gram: number;
      pieces: number;
      total_services: number;
    };
    aroma: string;
    photo_src: string;
  };
  pieces: number;
  unit_price: number;
  total_price: number;
}

export interface CartProps {
  total_price: number;
  items: CartItem[];
}

export interface RegisterPayload {
  email: string;
  password: string;
  password2?: string;
  api_key?: string;
  first_name: string;
  last_name: string;
}

export interface LoginPayload{
  username: string,
  password: string,
  api_key: string,
}


export interface CommentsProps{
  stars: number;
  title: string;
  comment: string;
}


