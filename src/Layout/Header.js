import { Sheet } from "@mui/joy";
import { styled } from "@mui/joy/styles";
import { Link } from "react-router-dom";
import Popover from "@mui/material/Popover";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Badge from "@mui/material/Badge";
import logoImg from "../Assets/logo-removebg-preview.png";
import { useState } from "react";
import { UserMenu } from "../Components/UserMenu";

const NavbarContainer = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 22px",
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
          <Image src={logoImg} />
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
          <IconContainer>
            <FavoriteBorderOutlinedIcon
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "inline",
                  xl: "inline",
                },
              }}
            />
            <PersonOutlineOutlinedIcon
              onClick={handleUserMenuClick}
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "inline",
                  xl: "inline",
                },
              }}
            />
            <Badge color="primary" variant="dot">
              <LocalMallOutlinedIcon />
            </Badge>
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
