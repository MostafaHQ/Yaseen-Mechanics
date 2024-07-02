import { styled } from "@mui/joy/styles";
import { Sheet } from "@mui/joy";
import { DemoVid } from "../Components/DemoVid";
import { Enginners } from "../Components/Engineers";
import { AboutProducts } from "../Components/AboutProducts";
import fahedPic from "../Assets/fahed.jpeg";
import shadiPic from "../Assets/shadi.jpeg";
import noorPic from "../Assets/noor.jpeg";
import shareefPic from "../Assets/shareef.jpeg";
import ashqarPic from "../Assets/Ashqar.jpeg";
import elevator from "../Assets/elevator.jpg";
import { Carousel } from "../Components/Carousel";

const Container = styled(Sheet)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  background: "var(--bright)",
  padding: "25px",
  gap: "20px",
}));

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
}));

export const Home = () => {
  const engineers = [
    {
      engName: "م.فهد ياسين",
      engPosition: "المدير العام",
      phoneNum: "+97059 - 7032370",
      engPic: fahedPic,
    },
    {
      engName: "م.شادي أبو شمعة ",
      engPosition: "مختص صيانة اليو بي اس وانظمة الباك اب سستم والبطاريات",
      phoneNum: "+97059-9643478",
      engPic: shadiPic,
    },
    {
      engName: "م.نور ياسين",
      engPosition: "مهندس المبيعات",
      phoneNum: "+972 59-2458766",
      engPic: noorPic,
    },
    {
      engName: "م.شريف سعد الدين",
      engPosition: "مهندس المصانع والصيانة في مجال الالكتروميكانيك ",
      phoneNum: "+97059-9786696",
      engPic: shareefPic,
    },
    {
      engName: "م.محمد الأشقر",
      engPosition: "مهندس حلول الطاقة",
      phoneNum: "+97059 - 7032370",
      engPic: ashqarPic,
    },
  ];
  return (
    <>
      <Container>
        <Carousel />
        <DemoVid />
        <AboutProducts />
        <Image src={elevator} />
        <Enginners engs={engineers} />
      </Container>
    </>
  );
};
