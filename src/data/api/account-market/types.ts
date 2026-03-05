export interface ProductAccountMarket {
  id: number;
  name: string;
  code: string;
  price: number;
  discount: string;
  collector_type: string;
  status: string;
  images: Image[];
  thumbnail: string | null;
  detail_images: Image[];
  created_at: string;
  discount_price: number;
  page?: TPages[];
}

export interface Image {
  id: number;
  image: string;
}

export interface TPages {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
}

export interface AccountResponse {
  accounts: ProductAccountMarket[];
  pagination: TPages;
}
