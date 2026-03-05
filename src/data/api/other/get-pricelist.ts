// import axios from 'axios';

// const baseAxios = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_BASE_URL_ENDPOINT,
// });

// const getPriceList = async (page: number, limit: number) => {
//   try {
//     const response = await baseAxios.get('/price-list', {
//       params: {
//         page,
//         limit,
//       },
//     });

//     if (response.data?.data?.data) {
//       return response.data.data.data;
//     } else {
//       throw new Error('No data found');
//     }
//   } catch (error) {
//     console.error('Error fetching price list:', error);
//     throw error;
//   }
// };

// export default getPriceList;

import axios from "axios";

const baseAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_ENDPOINT,
});

interface PriceListResponse {
  data: {
    data: any[];
    page: {
      total_pages: number;
    };
  };
}

const getPriceList = async (page: number, limit: number) => {
  try {
    const response = await baseAxios.get<PriceListResponse>("/price-list", {
      params: { page, limit },
    });

    return {
      products: response.data?.data?.data || [],
      totalPages: response.data?.data?.page?.total_pages || 1,
    };
  } catch (error) {
    console.error("Error fetching price list:", error);
    return { products: [], totalPages: 1 };
  }
};

export default getPriceList;
