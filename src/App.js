import "./style.scss";
import Nav from "./components/nav";
import Footer from "./components/Footer";
import Charge from "./components/Charge";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Product from "./pages/Product";
import UseCase from "./pages/Use_case";
import Contacts from "./pages/Contacts";
import NewsRoom from "./pages/News_room";
import Fleets from "./pages/Fleets";
import ScrollToTop from "./ScrollToTop"; // Import the ScrollToTop component
import EV_Manufacturer from "./pages/EV_Manufacturer";

function App() {
  return (
    <Router className="App">
      <ScrollToTop /> {/* Add the ScrollToTop component here */}
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Technology" element={<Technology />} />
        <Route exact path="/Products" element={<Product />} />
        <Route exact path="/Use_case" element={<UseCase />} />
        <Route exact path="/Contacts" element={<Contacts />} />
        <Route exact path="/News_room" element={<NewsRoom />} />
        <Route exact path="/Careers" element={<Charge />} />
        <Route exact path="/Fleets" element={<Fleets />} />
        <Route exact path="/ev-manufacturer" element={<EV_Manufacturer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
