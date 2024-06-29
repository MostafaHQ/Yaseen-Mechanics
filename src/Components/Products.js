import Grid from "@mui/joy/Grid";
import { ProductCard } from "./ProductCard";

export const Products = ({ purchases }) => {
  return (
    <>
      <Grid container spacing={3} sx={{ flexGrow: 1 }}>
        {purchases.map((purchase, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <ProductCard product={purchase} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
