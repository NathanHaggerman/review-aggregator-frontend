import { Container, Typography } from "@mui/material";

import ReviewList from "./components/ReviewList";

function App() {
  return (
    <Container maxWidth="md" sx={{ mt: 8, px: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
        Review Aggregator
      </Typography>
      <ReviewList />
    </Container>
  );
}

export default App;
