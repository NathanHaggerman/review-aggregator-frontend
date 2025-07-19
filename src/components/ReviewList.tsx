import {
  Alert,
  Box,
  Card,
  CardContent,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

import api from "../api";

import type { Review } from "../types";

export default function ReviewList() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedRating, setSelectedRating] = useState("all");

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

  const filteredReviews =
    selectedRating === "all"
      ? reviews
      : reviews.filter((review) => review.rating === Number(selectedRating));

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 4, px: 2 }}>
      {/* Dropdown Filter */}
      <FormControl fullWidth sx={{ mb: 4 }}>
        <InputLabel id="rating-select-label">Filter by Rating</InputLabel>
        <Select
          labelId="rating-select-label"
          value={selectedRating}
          label="Filter by Rating"
          onChange={(e) => setSelectedRating(e.target.value)}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="5">5 Stars</MenuItem>
          <MenuItem value="4">4 Stars</MenuItem>
          <MenuItem value="3">3 Stars</MenuItem>
          <MenuItem value="2">2 Stars</MenuItem>
          <MenuItem value="1">1 Star</MenuItem>
        </Select>
      </FormControl>

      {/* Review Cards */}
      {filteredReviews.map((review) => (
        <Card key={review.id} sx={{ mb: 3 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between" mb={1}>
              <Typography variant="h6">{review.author}</Typography>
              <Typography variant="body2" color="text.secondary">
                {review.createdAt.slice(0, 10)}
              </Typography>
            </Box>
            <Typography variant="body1" paragraph>
              {review.content}
            </Typography>
            <Typography color="warning.main">
              Rating: {review.rating}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
