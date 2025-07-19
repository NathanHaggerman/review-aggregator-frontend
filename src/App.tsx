import AppHeader from "./components/AppHeader";
import { Container, CssBaseline, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMemo, useState } from "react";

import ReviewList from "./components/ReviewList";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const toggleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppHeader toggleColorMode={toggleColorMode} />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
          Review Aggregator
        </Typography>
        <ReviewList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
