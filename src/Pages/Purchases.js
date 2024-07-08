import { styled } from "@mui/joy/styles";
import { Sheet } from "@mui/joy";
import Grid from "@mui/joy/Grid";
import { PageTitle } from "../Components/PageTitle";
import { ProductCard } from "../Components/ProductCard";
import { DataContext } from "../Contexts/DataContext";
import { useContext } from "react";

const Container = styled(Sheet)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  background: "var(--bright)",
  padding: "25px",
  gap: "30px",
}));

export const Purcahses = () => {
  const { dataArray } = useContext(DataContext);

  return (
    <>
      <Container>
        <PageTitle text={"My Purchases"} />
        <Grid container spacing={3} sx={{ flexGrow: 1 }}>
          {dataArray && dataArray.length > 0 ? (
            dataArray.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <ProductCard item={item} />
              </Grid>
            ))
          ) : (
            <div>No purchases available</div>
          )}
        </Grid>
      </Container>
    </>
  );
};
