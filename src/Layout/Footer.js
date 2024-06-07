import { styled } from "@mui/material/styles";
import { Sheet } from "@mui/joy";
import { Link } from "react-router-dom";
import Divider from "@mui/joy/Divider";
import Fblogo from "../icons/fb logo.svg";
import Instalogo from "../icons/insta logo.svg";
import Locationlogo from "../icons/location.svg";

const FooterContainer = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "30px 50px",
  paddingBottom: "85px",
  background: "var(--primary)",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
}));

const LeftSide = styled(Sheet)(({ theme }) => ({
  display: "flex",
  width: "40%",
  gap: "50px",
  background: "var(--primary)",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
}));

const RightSide = styled(Sheet)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: "10px",
  gap: "20px",
  background: "var(--primary)",
}));

const List = styled(Sheet)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "3px",
  background: "var(--primary)",
}));

const IconsContainer = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "end",
  gap: "20px",
  background: "var(--primary)",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "start",
  },
  [theme.breakpoints.down("md")]: {
    justifyContent: "start",
  },
}));

const Location = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "end",
  gap: "5px",
  paddingBottom: "7px",
  background: "var(--primary)",
  color: "var(--accent)",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "start",
  },
  [theme.breakpoints.down("md")]: {
    justifyContent: "start",
  },
}));

const StyledParagraph = styled("p")(({ theme }) => ({
  color: "var(--accent)",
}));

const FilterLinks = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "var( --light-text)",
  background: "var(--primary)",
}));

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <LeftSide>
          <List>
            <StyledParagraph>Our Sections</StyledParagraph>
            <FilterLinks>Machines</FilterLinks>
            <FilterLinks>Energy Solutions</FilterLinks>
            <FilterLinks>Electro Mechanics</FilterLinks>
            <FilterLinks>Maintenance</FilterLinks>
          </List>
        </LeftSide>
        <Divider
          sx={{
            display: {
              xs: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            },
            width: "100vw",
          }}
        />
        <RightSide>
          <IconsContainer>
            <Link
              to={"https://www.facebook.com/Yaseen.Mechanics"}
              target="_blank">
              <img src={Fblogo} alt="Facebook logo" />
            </Link>
            <Link to={"https://www.instagram.com/"} target="_blank">
              <img src={Instalogo} alt="Instagram logo" />
            </Link>
          </IconsContainer>
          <Sheet>
            <Location>
              <img src={Locationlogo} alt="Location icon" />
              <StyledParagraph>Tulkarem-Palestine</StyledParagraph>
            </Location>
          </Sheet>
        </RightSide>
      </FooterContainer>
    </>
  );
};
