import Button from "@mui/joy/Button";
import { styled } from "@mui/joy/styles";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";

const StyledButton = styled(Button)(({ theme }) => ({
  color: "var(--accent)",
  background: "#2B4B69",
  fontWeight: "var(--semi-bold-font)",
  fontSize: "1rem",
  width: "165px",
  height: "35px",
}));

export const NavigateButton = ({ text, onClick, to }) => {
  return (
    <>
      <Link to={to}>
        <StyledButton
          endDecorator={<KeyboardArrowRight color="neutral" fontSize="lg" />}
          onClick={onClick}>
          {text}
        </StyledButton>
      </Link>
    </>
  );
};
