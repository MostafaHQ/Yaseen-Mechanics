import { ComplaintForm } from "../Components/ComplaintForm";
import { NavigateButton } from "../Components/NavigateButton";
import { Sheet } from "@mui/joy";

export const FormPage = () => {
  return (
    <>
      <ComplaintForm />
      <Sheet
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "20px",
        }}>
        <NavigateButton text={"Go Back"} to={"/"} />
      </Sheet>
    </>
  );
};
