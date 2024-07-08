import { styled } from "@mui/joy/styles";
import Grid from "@mui/joy/Grid";
import productImg from "../Assets/generator3.jpeg";
import { useParams } from "react-router-dom";
import { DataContext } from "../Contexts/DataContext";
import { useContext } from "react";

const StyledData = styled("p")(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: "var(--semi-bold-font)",
  color: "var(--dark)",
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "30%",
  height: "auto",
}));

export const ProductDetails = () => {
  const { productId } = useParams();
  const { dataArray } = useContext(DataContext);
  const product = dataArray.find((item) => item.id === parseInt(productId));

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Grid container padding={1} spacing={3} sx={{ flexGrow: 1 }}>
        <Grid xs={12} sm={6} md={6}>
          <label>Customer Name:</label>
          <StyledData>{product.customerName}</StyledData>
        </Grid>
        <Grid xs={12} sm={6} md={6}>
          <label>Product Name:</label>
          <StyledData>{product.productName}</StyledData>
        </Grid>
        <Grid xs={12} sm={6} md={6}>
          <label>Product Price:</label>
          <StyledData>{product.productPrice}</StyledData>
        </Grid>
        <Grid xs={12} sm={6} md={6}>
          <label>Delivery Date:</label>
          <StyledData>{product.deliveryDate}</StyledData>
        </Grid>
        <Grid xs={12} sm={6} md={6}>
          <label>Quantity:</label>
          <StyledData>{product.quantity}</StyledData>
        </Grid>
        <Grid xs={12} sm={6} md={6}>
          <label>Warranty Period:</label>
          <StyledData>{product.warrantyPeriod}</StyledData>
        </Grid>
        <Grid xs={12} sm={6} md={6}>
          <label>Routine Maintenance:</label>
          <StyledData>{product.routineMaintenance}</StyledData>
        </Grid>
      </Grid>
      <StyledImg src={product.productImg} />
    </>
  );
};
