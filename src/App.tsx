import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Component/Landing_Page/LandingPage";
import NavBar from "./Component/NavBar/NavBar";
import { AboutUs } from "./Component/AboutUs/AboutUs";
import { Services } from "./Component/Services/Services";
import { Contact } from "./Component/Contact/Contact";
import SignUp from "./Component/SignUp/SignUp";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
