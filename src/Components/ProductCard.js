import { Sheet } from "@mui/joy";
import { styled } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import { Link } from "react-router-dom";

const LinkedCard = styled(Link)(({ theme }) => ({
  textDecoration: "none",
}));

const CardInfo = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "end",
  background: "var(--bright)",
}));

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "16rem",
  aspectRatio: 1 / 1,
}));

const ProductName = styled("h4")(({ theme }) => ({
  fontSize: "1.2rem",
  lineHeight: 2,
  fontWeight: 600,
  textDecoration: "none",
}));

export const ProductCard = ({ item }) => {
  return (
    <>
      <LinkedCard key={item.id} to={`/detail/${item.id}`}>
        <Card
          variant="plain"
          sx={{
            background: "var(--bright)",
            minWidth: "260px",
            padding: 2,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}>
          <Image src={item.productImg} />
          <CardInfo>
            <Sheet sx={{ background: "var(--bright)", padding: "0 " }}>
              <ProductName>{item.productName}</ProductName>
            </Sheet>
          </CardInfo>
        </Card>
      </LinkedCard>
    </>
  );
};
