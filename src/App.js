import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataProvider } from "./Contexts/DataContext";
import { MainLayout } from "./Layout/MainLayout";
import { Home } from "./Pages/Home";
import { SignIn } from "./Pages/SignIn";
import { SignUp } from "./Pages/SignUp";
import { FormPage } from "./Pages/FormPage";
import { Purcahses } from "./Pages/Purchases";
import { Detail } from "./Pages/Detail";
function App() {
  return (
    <DataProvider>
      <BrowserRouter basename="/Yaseen-Mechanics">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/purchases" element={<Purcahses />} />
            <Route path="/detail/:productId" element={<Detail />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/form" element={<FormPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
