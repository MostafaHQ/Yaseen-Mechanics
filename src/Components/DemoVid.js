import { Card, CardCover, CardContent, IconButton } from "@mui/joy";
import { useState } from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
export const DemoVid = () => {
  const demoVid = require(`../Assets/videos/demo.mp4`);
  const [isMuted, setIsMuted] = useState(true);
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  return (
    <>
      <Card sx={{ height: "800px" }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted={isMuted}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}>
            <source src={demoVid} type="video/mp4" />
          </video>
        </CardCover>
        <CardContent
          sx={{
            position: "absolute",
            bottom: 16,
            left: 16,
            zIndex: 1,
          }}>
          <IconButton
            onClick={toggleMute}
            color="primary"
            sx={{ color: "white" }}>
            {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
          </IconButton>
        </CardContent>
      </Card>
    </>
  );
};
