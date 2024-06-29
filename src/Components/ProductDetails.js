import { styled } from "@mui/joy/styles";
import Grid from "@mui/joy/Grid";

const StyledData = styled("p")(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: "var(--semi-bold-font)",
  color: "var(--dark)",
}));

export const ProductDetails = () => {
  return (
    <>
      <Grid container padding={1} spacing={3} sx={{ flexGrow: 1 }}>
        <Grid xs={12} sm={6} md={6}>
          <label>Customer Name:</label>
          <StyledData>Fathi</StyledData>
        </Grid>
        <Grid xs={12} sm={6} md={6}>
          <label>Product Name:</label>
          <StyledData>Generator</StyledData>
        </Grid>
        <Grid xs={12} sm={6} md={6}>
          <label>Product Name:</label>
          <StyledData>Generator</StyledData>
        </Grid>
        <Grid xs={12} sm={6} md={6}>
          <label>Product Price:</label>
          <StyledData>10000 ₪</StyledData>
        </Grid>
        <Grid xs={12} sm={6} md={6}>
          <label>Delivery Date:</label>
          <StyledData>29/6/2024</StyledData>
        </Grid>
        <Grid xs={12} sm={6} md={6}>
          <label>Quantity:</label>
          <StyledData>1</StyledData>
        </Grid>
        <Grid xs={12} sm={6} md={6}>
          <label>Warranty Period:</label>
          <StyledData>2 years</StyledData>
        </Grid>
        <Grid xs={12} sm={6} md={6}>
          <label>Routine Maintenance:</label>
          <StyledData>every 3 months</StyledData>
        </Grid>
      </Grid>
    </>
  );
};
