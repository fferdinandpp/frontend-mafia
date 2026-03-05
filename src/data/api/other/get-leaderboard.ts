import axios from "axios";

const baseAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_ENDPOINT,
});

interface TopupData {
  daily: { customer_name: string; total_spending: number }[];
  weekly: { customer_name: string; total_spending: number }[];
  monthly: { customer_name: string; total_spending: number }[];
}
interface JokiData {
  daily: { customer_name: string; total_spending: number }[];
  weekly: { customer_name: string; total_spending: number }[];
  monthly: { customer_name: string; total_spending: number }[];
}
interface LeaderboardResponse {
  message: string;
  data: {
    member_top_up: TopupData;
    non_member_top_up: TopupData;
    member_joki: JokiData;
    non_member_joki: JokiData;
  };
}

export async function getLeaderboard() {
  try {
    const response = await baseAxios.get<LeaderboardResponse>("/leaderboard");
    return response.data;
  } catch (error) {
    console.error("Error fetching leaderboard data:", error);
    throw error;
  }
}
