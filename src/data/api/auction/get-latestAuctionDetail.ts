import { baseAxios } from "@/utils/baseAxios";
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
  created_at: string;
}

const getLatestAuctionDetail = async () => {
  try {
    const productResponse = await baseAxios.get("/auction", {
      params: { page: 1, limit: 10 },
    });
    const products: ProductsData[] = productResponse.data.data?.data || [];

    if (products.length === 0) {
      throw new Error("Tidak ada data lelang tersedia.");
    }

    const latestProduct = products.reduce(
      (latest: ProductsData, current: ProductsData) =>
        new Date(current.created_at) > new Date(latest.created_at)
          ? current
          : latest
    );

    if (!latestProduct.code) {
      throw new Error("Produk terbaru tidak memiliki kode.");
    }

    const response = await baseAxios.get(
      `/auction/${latestProduct.code}/detail`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching latest auction details:", error);
    throw new Error("Gagal mengambil detail lelang terbaru.");
  }
};

export default getLatestAuctionDetail;
