import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";
import { Home } from "./Pages/Home";
import { SignIn } from "./Pages/SignIn";
import { SignUp } from "./Pages/SignUp";
import { FormPage } from "./Pages/FormPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/form" element={<FormPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
