import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import ModalClose from "@mui/joy/ModalClose";
import Menu from "@mui/icons-material/Menu";
import { styled } from "@mui/joy/styles";
import { Link } from "react-router-dom";

const NavbarLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "var(--type-high-emphasis)",
  fontWeight: "var(--medium-font)",
}));

export const DrawerMobileNavigation = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <IconButton
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "block",
            lg: "none",
            xl: "none",
          },
        }}
        color="neutral"
        onClick={() => setOpen(true)}>
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            ml: "auto",
            mt: 1,
            mr: 2,
          }}>
          <Typography
            component="label"
            htmlFor="close-icon"
            fontSize="sm"
            fontWeight="lg"
            sx={{ cursor: "pointer" }}>
            Close
          </Typography>
          <ModalClose id="close-icon" sx={{ position: "initial" }} />
        </Box>
        <List
          size="lg"
          component="nav"
          sx={{
            flex: "none",
            fontSize: "xl",
            "& > div": { justifyContent: "center" },
          }}>
          <NavbarLink>
            <ListItemButton>Machines</ListItemButton>
          </NavbarLink>
          <NavbarLink>
            <ListItemButton>Energy Solutions</ListItemButton>
          </NavbarLink>
          <NavbarLink>
            <ListItemButton>Electro Mechanics</ListItemButton>
          </NavbarLink>
          <NavbarLink>
            <ListItemButton>Maintenance</ListItemButton>
          </NavbarLink>
        </List>
      </Drawer>
    </>
  );
};
