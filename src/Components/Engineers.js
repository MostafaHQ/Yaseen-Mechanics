import { EngCard } from "./EngCard";
import Grid from "@mui/joy/Grid";

export const Enginners = ({ engs }) => {
  return (
    <>
      <Grid container p={"20px"} spacing={3} sx={{ flexGrow: 1 }}>
        {engs.map((eng, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <EngCard eng={eng} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
