import { styled } from "@mui/joy/styles";
import { Sheet } from "@mui/joy";
import { DemoVid } from "../Components/DemoVid";

const Container = styled(Sheet)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  background: "var(--bright)",
  paddingBottom: "50px",
}));

export const Home = () => {
  return (
    <>
      <Container>
        <DemoVid />
      </Container>
    </>
  );
};
