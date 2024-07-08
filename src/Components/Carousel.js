import React, { useState } from "react";
import { styled } from "@mui/joy/styles";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils";
import Box from "@mui/material/Box";
import hero1 from "../Assets/hero3.jpg";
import hero2 from "../Assets/hero2.jpg";
import { Sheet } from "@mui/joy";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  { src: hero1, alt: "Image 1" },
  { src: hero2, alt: "Image 2" },
];

const StyledHero = styled("img")(({ theme }) => ({
  borderRadius: "10px",
  height: "400px",
  width: "100%",
}));

export const Carousel = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ height: "auto" }}>
      <AutoPlaySwipeableViews
        axis="x"
        index={activeStep}
        onChangeIndex={handleStepChange}
        interval={4000} // Change the interval to your preferred timing (milliseconds)
        enableMouseEvents>
        {images.map((image, index) => (
          <Sheet key={index} style={{ position: "relative" }}>
            <StyledHero src={image.src} alt={image.alt} />
          </Sheet>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
};
