import { styled } from "@mui/joy/styles";
import { Sheet } from "@mui/joy";
import { DemoVid } from "../Components/DemoVid";
import { Enginners } from "../Components/Engineers";
import { NavigateButton } from "../Components/NavigateButton";

const Container = styled(Sheet)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  background: "var(--bright)",
  paddingBottom: "50px",
}));

export const Home = () => {
  const engineers = [
    {
      engName: "م.فهد ياسين",
      engPosition: "المدير العام",
      phoneNum: "+97059 - 7032370",
      engPic:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    },
    {
      engName: "م.شريف سعد الدين",
      engPosition: "مهندس المصانع والصيانة في مجال الالكتروميكانيك ",
      phoneNum: "+97059-9786696",
      engPic:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    },
    {
      engName: "م.محمد الأشقر",
      engPosition: "مهندس حلول الطاقة",
      phoneNum: "+97059 - 7032370",
      engPic:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    },
    {
      engName: "م.نور ياسين",
      engPosition: "مهندس المبيعات",
      phoneNum: "+972 59-2458766",
      engPic:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    },
  ];
  return (
    <>
      <Container>
        <DemoVid />
        <Enginners engs={engineers} />
        <Sheet sx={{ display: "flex", justifyContent: "center" }}>
          <NavigateButton text={"Submit a Complaint"} to={"/form"} />
        </Sheet>
      </Container>
    </>
  );
};
