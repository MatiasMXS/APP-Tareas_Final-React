import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import StarIcon from "@mui/icons-material/Star";
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { ListMenu } from "../ListMenu/ListMenu";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { AppBarMenu } from "../appBarMenu/AppBarMenu";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function ButtonAppBar({ children }) {
  const [open, setOpen] = useState(close);
  const navigate = useNavigate();

  const menu = [
    {
      id: 2,
      titulo: "Agregar tareas",
      path: "/add",
      icon: <DashboardIcon />,
    },
    {
      id: 3,
      titulo: "Listado tareas",
      path: "/dashboard",
      icon: <StarIcon />,
    },
    {
      kind: 'divider',
    },
    {
      kind: 'header',
      title: 'Analytics',
    },
    {
      segment: 'reports',
      titulo: 'Reports',
      icon: <BarChartIcon />,
      children: [
        {
          segment: 'sales',
          titulo: 'Sales',
          icon: <DescriptionIcon />,
        },
        {
          segment: 'traffic',
          titulo: 'Traffic',
          icon: <DescriptionIcon />,
        },
      ],
    },
    {
      segment: 'integrations',
      titulo: 'Integrations',
      icon: <LayersIcon />,
    },

  ];

  return (
   
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {/**Esta parte de acá es el appbar, la barrita azul */}
      <AppBarMenu setOpen={setOpen} />
      {/** esto es el drawer con los otros elementos del menu */}
      <Drawer
        variant="temporary"
        sx={{
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { boxSizing: "border-box" },
        }}
        open={open}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <Divider />
          <List>
            {menu.map(({ id, titulo, path, icon }) => (
              <>
                <NavLink
                  key={id}
                  to={path}
                  style={{ textDecoration: "none", color: "#4A4A4A" }}
                >
                  <ListMenu titulo={titulo} path={path} icon={icon} />
                </NavLink>
              </>
            ))}
          </List>
        </Box>
        <Box sx={{ marginTop: "auto" }}>
          <Divider />
          <List>
            <ListItem button onClick={() => navigate("/")}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Cerrar sesión" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      {children}
      <Outlet />
    </Box>
  );
}
