import { ProductAccountMarket } from "../account-market/types";

export interface EventListResponse {
  message: string;
  data: {
    data: Event[];
    page: Pagination;
  };
}

export interface Event {
  id: number;
  name: string;
  start_at: string;
  end_at: string;
  status: string;
  image: string;
  account_mobile_legends: ProductAccountMarket[];
}

export interface MobileLegendsAccount {
  id: number;
  name: string;
  code: string;
  images: AccountImage[];
}

export interface AccountImage {
  id: number;
  image: string;
}

export interface Pagination {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
}
