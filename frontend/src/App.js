import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Appointments from "./pages/appointments/Appointments";
import Doctors from "./pages/doctors/Doctors";
import Notfound from "./pages/notfound/Notfound";
import LabTests from "./pages/labTests/LabTests";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="appointments" element={<Appointments/>}/>
        <Route path="doctors" element={<Doctors/>}/>
        <Route path="labTests" element={<LabTests/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
