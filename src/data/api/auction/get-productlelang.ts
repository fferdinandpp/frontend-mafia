import { useEffect, useState } from "react";
import axios from "axios";

interface Image {
  id: number;
  account_mobile_legends_id: number;
  image: string;
  created_at: string;
  updated_at: string;
}

interface ProductsData {
  id: number;
  name: string;
  code: string;
  starting_price: number;
  min_bid: number;
  bid_increment: number;
  status: string;
  images: Image[];
  start_time: string;
  end_time: string;
}

interface ProductsHook {
  products: ProductsData[];
  loading: boolean;
  error: string | null;
  totalPages: number;
}

const baseAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_ENDPOINT,
});

const useProductLelang = (page: number, limit: number): ProductsHook => {
  const [products, setProducts] = useState<ProductsData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await baseAxios.get("/auction", {
          params: { page, limit },
        });
        setProducts(
          Array.isArray(response.data.data?.data) ? response.data.data.data : []
        );
        setTotalPages(response.data.data?.page?.total_pages || 1);
      } catch (err) {
        setError("Gagal mengambil data lelang.");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, limit]);

  return { products, loading, error, totalPages };
};

export default useProductLelang;
