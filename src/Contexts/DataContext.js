import { createContext, useState } from "react";
import productImg1 from "../Assets/generator3.jpeg";
import productImg2 from "../Assets/ups4.jpg";
import productImg3 from "../Assets/welding-machine.jpeg";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataArray, setDataArray] = useState([
    {
      id: 1,
      customerName: "Fathi",
      productName: "Generator",
      productPrice: "10000 ₪",
      deliveryDate: "29/6/2024",
      quantity: "1",
      warrantyPeriod: "2 years ",
      routineMaintenance: "every 3 months",
      productImg: productImg1,
    },
    {
      id: 2,
      customerName: "Fathi",
      productName: "UPS",
      productPrice: "500 ₪",
      deliveryDate: "1/3/2024",
      quantity: "2",
      warrantyPeriod: "1 years ",
      routineMaintenance: "every year",
      productImg: productImg2,
    },
    {
      id: 3,
      customerName: "Fathi",
      productName: "Welding Machine",
      productPrice: "1500 ₪",
      deliveryDate: "13/8/2023",
      quantity: "1",
      warrantyPeriod: "1 years ",
      routineMaintenance: "none",
      productImg: productImg3,
    },
  ]);

  return (
    <DataContext.Provider value={{ dataArray, setDataArray }}>
      {children}
    </DataContext.Provider>
  );
};
