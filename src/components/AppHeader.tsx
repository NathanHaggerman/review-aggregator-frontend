import { Brightness4, Brightness7 } from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";

interface Props {
  toggleColorMode: () => void;
}

export default function AppHeader({ toggleColorMode }: Props) {
  const theme = useTheme();

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          Review App
        </Typography>
        <IconButton color="inherit" onClick={toggleColorMode}>
          {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
