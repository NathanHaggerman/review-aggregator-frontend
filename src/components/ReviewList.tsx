import { useEffect, useState } from "react";

import api from "../api";

import type { Review } from "../types";

export default function ReviewList() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .get<Review[]>("/reviews")
      .then((res) => {
        setReviews(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch reviews");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-gray-500">Loading reviews...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="p-4 border rounded shadow-sm">
          <div className="flex justify-between mb-2">
            <h3 className="font-semibold">{review.author}</h3>
            <span className="text-sm text-gray-500">
              {review.createdAt.slice(0, 10)}
            </span>
          </div>
          <p className="mb-2">{review.content}</p>
          <span className="text-yellow-500">Rating: {review.rating}</span>
        </div>
      ))}
    </div>
  );
}
