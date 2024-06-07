import { styled } from "@mui/joy/styles";

const Container = styled(Sheet)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  background: "var(--bright)",
  paddingBottom: "50px",
}));

export const Home = () => {
  return (
    <>
      <Container></Container>
    </>
  );
};
