import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { menuMockup } from "../../utils/MenuMockup";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { AppBarMenu } from "../appBarMenu/AppBarMenu";

import logo from "../../assets/logo.svg";

export default function ButtonAppBar({ children }) {
  const [open, setOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});
  const navigate = useNavigate();

  const handleToggleSubMenu = (menuId) => {
    setExpandedMenus((prevState) => ({
      ...prevState,
      [menuId]: !prevState[menuId],
    }));
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <AppBarMenu setOpen={setOpen} />
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
          <Box
            sx={{
              display: "flex",
              margin: "16px",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: "65px", height: "65px" }}
            ></img>
            <Typography variant="h6" component="div">
              Menu
            </Typography>
          </Box>
          <Divider />
          <List>
            {menuMockup.map((item) =>
              item.kind === "divider" ? (
                <Divider key={`divider-${item.id}`} />
              ) : item.kind === "header" ? (
                <ListItem key={`header-${item.title}`}>
                  <ListItemText primary={item.title} />
                </ListItem>
              ) : item.children ? (
                <div key={item.id}>
                  <ListItem button onClick={() => handleToggleSubMenu(item.id)}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.titulo} />
                    {expandedMenus[item.id] ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse
                    in={expandedMenus[item.id]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {item.children.map((child) => (
                        <NavLink
                          key={child.id}
                          to={child.path}
                          style={{
                            textDecoration: "none",
                            color: "#4A4A4A",
                            marginLeft: 16,
                          }}
                        >
                          <ListItem button>
                            <ListItemIcon>{child.icon}</ListItemIcon>
                            <ListItemText primary={child.titulo} />
                          </ListItem>
                        </NavLink>
                      ))}
                    </List>
                  </Collapse>
                </div>
              ) : (
                <NavLink
                  key={item.id}
                  to={item.path}
                  style={{ textDecoration: "none", color: "#4A4A4A" }}
                >
                  <ListItem button>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.titulo} />
                  </ListItem>
                </NavLink>
              )
            )}
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
