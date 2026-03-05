export type LeaderboardEntry = {
  customer_name: string;
  total_spending: number;
  purchase_type?: string;
};

export type ProductLeaderboard = {
  non_member_joki: {
    daily: LeaderboardEntry[];
    weekly: LeaderboardEntry[];
    monthly: LeaderboardEntry[];
  };
  member_joki: {
    daily: LeaderboardEntry[];
    weekly: LeaderboardEntry[];
    monthly: LeaderboardEntry[];
  };
  member_top_up: {
    daily: LeaderboardEntry[];
    weekly: LeaderboardEntry[];
    monthly: LeaderboardEntry[];
  };
  non_member_top_up: {
    daily: LeaderboardEntry[];
    weekly: LeaderboardEntry[];
    monthly: LeaderboardEntry[];
  };
};
