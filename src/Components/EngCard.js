import { Sheet } from "@mui/joy";
import { styled } from "@mui/joy/styles";
import Card from "@mui/joy/Card";

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

const EngName = styled("h4")(({ theme }) => ({
  fontSize: "1.2rem",
  lineHeight: 2,
  fontWeight: 600,
  textAlign: "end",
}));

const ItemName = styled("h5")(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "var(--extra-light-font)",
  textAlign: "end",
}));

export const EngCard = ({ eng }) => {
  return (
    <>
      <Card
        variant="plain"
        sx={{
          background: "var(--bright)",
          minWidth: "260px",
          padding: "0",
        }}>
        <Image src={eng.engPic} />
        <CardInfo>
          <Sheet sx={{ background: "var(--bright)", padding: "0 " }}>
            <EngName>{eng.engName}</EngName>
            <ItemName>{eng.engPosition}</ItemName>
            <EngName>{eng.phoneNum}</EngName>
          </Sheet>
        </CardInfo>
      </Card>
    </>
  );
};
