import { Sheet, Textarea } from "@mui/joy";
import { styled } from "@mui/joy/styles";
import { InputWithLabel } from "./InputWithLabel";
import { StyledTextarea } from "./StyledTextarea";
import Grid from "@mui/joy/Grid";

const FormRaw = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  background: "var(--bright)",
}));

const StyledForm = styled("form")(({ theme }) => ({
  background: "var(--bright)",
  padding: "20px",
}));

export const ComplaintForm = () => {
  return (
    <>
      <StyledForm>
        <Grid container spacing={3} sx={{ flexGrow: 1, direction: "rtl" }}>
          <Grid xs={12} sm={6}>
            <InputWithLabel label={"الاسم"} placeholder={"ادخل اسمك"} />
          </Grid>
          <Grid xs={12} sm={6}>
            <InputWithLabel
              label={"رقم الهاتف"}
              placeholder={"ادخل رقم الهاتف"}
            />
          </Grid>
          <Grid xs={12} sm={6}>
            <InputWithLabel
              label={"الموقع-المدينة"}
              placeholder={"ادخل موقعك"}
            />
          </Grid>
          <Grid xs={12} sm={6}>
            <InputWithLabel
              label={"المُنشأة"}
              placeholder={"ادخل اسم المُنشأة"}
            />
          </Grid>
          <Grid xs={12} sm={6}>
            <StyledTextarea label={"الشكوى"} placeholder={"ادخل شكواك"} />
          </Grid>
        </Grid>
      </StyledForm>
    </>
  );
};
