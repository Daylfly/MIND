"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { apiPath } from "@/lib/api-path";

export interface MindReviewClient {
  id: string;
  doctorName: string;
  doctorRole: string;
  doctorAvatarUrl: string;
  text: string;
  authorName: string;
  rating: number;
}

interface ReviewsContextValue {
  reviews: MindReviewClient[];
  loading: boolean;
  reload: () => Promise<void>;
}

const ReviewsContext = createContext<ReviewsContextValue | null>(null);

export function ReviewsProvider({ children }: { children: React.ReactNode }) {
  const [reviews, setReviews] = useState<MindReviewClient[]>([]);
  const [loading, setLoading] = useState(true);

  const reload = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(apiPath("/api/reviews"));
      setReviews(await res.json());
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  return (
    <ReviewsContext.Provider value={{ reviews, loading, reload }}>
      {children}
    </ReviewsContext.Provider>
  );
}

export function useReviews() {
  const ctx = useContext(ReviewsContext);
  if (!ctx) throw new Error("useReviews must be used within ReviewsProvider");
  return ctx;
}
