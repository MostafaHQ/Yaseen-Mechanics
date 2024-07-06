import { styled } from "@mui/joy/styles";
import { Sheet } from "@mui/joy";
import { PageTitle } from "../Components/PageTitle";
import { Products } from "../Components/Products";
import generator from "../Assets/generator.jpeg";

const Container = styled(Sheet)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  background: "var(--bright)",
  padding: "25px",
  gap: "30px",
}));

export const Purcahses = () => {
  const purchases = [
    {
      id: 1,
      productName: "مولد",
      productPrice: "10000 Nis",
      productCompany: "Etco",
      productImg: generator,
    },
  ];

  return (
    <>
      <Container>
        <PageTitle text={"My Purchases"} />
        <Products purchases={purchases} />
      </Container>
    </>
  );
};
