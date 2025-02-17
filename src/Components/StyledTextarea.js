import { Textarea } from "@mui/joy";
import { styled } from "@mui/joy/styles";

const StyledLabel = styled("label")(({ theme }) => ({
  fontSize: "0.85rem",
  fontWeight: 500,
}));

export const StyledTextarea = ({ placeholder, label, value }) => {
  return (
    <>
      <StyledLabel>{label}</StyledLabel>
      <Textarea
        sx={{
          color: "var(--type-low-emphasis)",
          backgroundColor: "#F1F1F1",
          fontSize: 14,
          mb: 2,
        }}
        placeholder={placeholder}
        value={value}
        variant="solid"
        color="neutral"
        size="lg"
      />
    </>
  );
};
