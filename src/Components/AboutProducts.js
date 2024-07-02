import { Sheet } from "@mui/joy";
import { styled } from "@mui/joy/styles";
import React from "react";
import GenerateImg from "../Assets/generator.jpeg";

const Container = styled(Sheet)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
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

const LinearContainer = styled(Sheet)(({ theme }) => ({
  background: "var(--bright)",
  display: "flex",
  alignItems: "center",
}));

const ImageSide = styled(Sheet)(({ theme }) => ({
  background: "var(--bright)",
  width: "50%",
}));

const WriteSide = styled(Sheet)(({ theme }) => ({
  background: "var(--bright)",
  textAlign: "center",
  width: "50%",
}));

const Title = styled("h2")(({ theme }) => ({
  color: "var(--primary)",
  fontSize: "2.2rem",
}));

const Description = styled("p")(({ theme }) => ({
  color: "var(--dark)",
  fontSize: "1.3rem",
}));

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  borderRadius: "10px",
}));

export const AboutProducts = () => {
  return (
    <>
      <Container>
        <LinearContainer>
          <ImageSide>
            <Image src={GenerateImg} />
          </ImageSide>
          <WriteSide>
            <Title>المـــولــدات</Title>
            <Description>
              نقدم الأجود بين المولدات من ناحية قوة الأحمال وملف النحاس السميك
            </Description>
          </WriteSide>
        </LinearContainer>
        <LinearContainer>
          <WriteSide>
            <Title>UPS</Title>
            <Description>
              احمي أجهزتك وبياناتك حيث تحافظ على التيار والجهد والتردد <br />
              .وتحمي الأجهزة الحساسة من الحرق أو التلف
              <br />
              بتكلفة قليلة توفر عليك مبالغ كبيرة نتيجة حرق الأجهزة أو فقدان
              بياناتك
            </Description>
          </WriteSide>
          <ImageSide>
            <Image src={GenerateImg} />
          </ImageSide>
        </LinearContainer>
        <LinearContainer>
          <ImageSide>
            <Image src={GenerateImg} />
          </ImageSide>
          <WriteSide>
            <Title>الطــاقة الشمــسية</Title>
            <Description>
              نقدم الأجود بين المولدات من ناحية قوة الأحمال وملف النحاس السميك
            </Description>
          </WriteSide>
        </LinearContainer>
        <LinearContainer></LinearContainer>
      </Container>
    </>
  );
};
