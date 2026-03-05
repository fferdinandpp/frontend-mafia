import axios from "axios";
const baseAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_ENDPOINT,
});
const getDetailAccounts = async (code?: string) => {
  try {
    const response = await baseAxios.get(
      `/auction/${code}/detail`
    );

    return response.data.data;
  } catch (error) {
    console.error("Error fetching username:", error);
    throw new Error("Failed to fetch username. Please try again later.");
  }
};

export default getDetailAccounts;
