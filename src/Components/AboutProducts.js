import { Sheet } from "@mui/joy";
import { styled } from "@mui/joy/styles";
import React from "react";
import GenerateImg from "../Assets/generator.jpeg";

const Container = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  background: "var(--bright)",
  padding: "20px 0px",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
}));

const ImageSide = styled(Sheet)(({ theme }) => ({
  display: "flex",
  background: "var(--bright)",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
}));

const WriteSide = styled(Sheet)(({ theme }) => ({
  background: "var(--bright)",
  textAlign: "center",
}));

const Title = styled("h2")(({ theme }) => ({
  color: "var(--primary)",
  fontSize: "1.8rem",
}));

const Description = styled("p")(({ theme }) => ({
  color: "var(--dark)",
  fontSize: "1rem",
}));

const Image = styled("img")(({ theme }) => ({
  width: "350px",
  height: "350px",
  aspectRatio: 1 / 1,
}));

export const AboutProducts = () => {
  return (
    <>
      <Container>
        <ImageSide>
          <Image src={GenerateImg} />
        </ImageSide>
        <WriteSide>
          <Title>المـــولــدات</Title>
          <Description>
            نقدم الأجود بين المولدات من ناحية قوة الأحمال وملف النحاس السميك
          </Description>
        </WriteSide>
      </Container>
    </>
  );
};
