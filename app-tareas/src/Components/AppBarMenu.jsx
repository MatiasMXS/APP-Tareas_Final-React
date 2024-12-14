import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const AppBarMenu = ({ setOpen }) => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Button variant="secondary" onClick={() => setOpen((prev) => !prev)}>
          <MenuIcon />
        </Button>
        <Typography variant="h6" noWrap component="div">
          Libros
        </Typography>
      </Toolbar>
    </AppBar>
  );
};