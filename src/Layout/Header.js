import { Sheet } from "@mui/joy";
import { styled } from "@mui/joy/styles";
import { Link, useLocation } from "react-router-dom";
import Popover from "@mui/material/Popover";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import logoImg from "../Assets/logo-removebg-preview.png";
import { useState } from "react";
import { UserMenu } from "../Components/UserMenu";
import { NavigateButton } from "../Components/NavigateButton";
import { DrawerMobileNavigation } from "../Components/MobileNavigation";

const NavbarContainer = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px 22px",
  background: "var(--bright)",
}));

const SideContainer = styled(Sheet)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  background: "var(--bright)",
}));

const Image = styled("img")(({ theme }) => ({
  maxWidth: "120px",
  padding: "0",
  border: 0,
}));

const NavbarLinksContainer = styled(Sheet)(({ theme }) => ({
  gap: "12px",
  alignItems: "center",
  marginLeft: "10px",
  background: "var(--bright)",
}));

const NavbarLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "var(--type-high-emphasis)",
  fontWeight: "var(--medium-font)",
}));

const IconContainer = styled(Sheet)(({ theme }) => ({
  display: "flex",
  gap: "15px",
  alignItems: "bottom",
  background: "var(--bright)",
}));

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();

  const handleUserMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  const isUserMenuOpen = Boolean(anchorEl);
  return (
    <>
      <NavbarContainer>
        <SideContainer>
          <DrawerMobileNavigation />
          <Link to={"/"}>
            <Image src={logoImg} />
          </Link>
          <NavbarLinksContainer
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "flex",
              },
            }}>
            <NavbarLink>Machines</NavbarLink>
            <NavbarLink>Enenrgy Solutions</NavbarLink>
            <NavbarLink>Electro Mechanics</NavbarLink>
            <NavbarLink>Maintenance</NavbarLink>
          </NavbarLinksContainer>
        </SideContainer>
        <SideContainer>
          {location.pathname !== "/" && (
            <NavigateButton text={"My Purchases"} to={"/purchases"} />
          )}
          <IconContainer>
            <PersonOutlineOutlinedIcon onClick={handleUserMenuClick} />
          </IconContainer>
        </SideContainer>
      </NavbarContainer>
      <Popover
        open={isUserMenuOpen}
        anchorEl={anchorEl}
        onClose={handleUserMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}>
        <UserMenu />
      </Popover>
    </>
  );
};
