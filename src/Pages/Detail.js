import { styled } from "@mui/joy/styles";
import { Sheet } from "@mui/joy";
import { PageTitle } from "../Components/PageTitle";
import { ProductDetails } from "../Components/ProductDetails";

const Container = styled(Sheet)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  background: "var(--bright)",
  padding: "25px",
  gap: "30px",
}));

export const Detail = () => {
  return (
    <>
      <Container>
        <PageTitle text={"Product Details"} />
        <ProductDetails />
      </Container>
    </>
  );
};
