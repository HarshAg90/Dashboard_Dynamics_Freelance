import "./style.scss";
import Nav from "./components/nav";
import Footer from "./components/Footer";
import Charge from "./components/Charge";
import { BrowserRouter as Router,BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Products from "./pages/Products";
import UseCase from "./pages/Use_case";
import Contacts from "./pages/Contacts";
import NewsRoom from "./pages/News_room";
import Fleets from "./pages/Fleets";
import ScrollToTop from "./ScrollToTop"; // Import the ScrollToTop component
import Blogs from "./pages/Blogs";
import EV_users from "./pages/EV_users";
import EV_Manufacturer from "./pages/EV_Manufacturer";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import About from "./pages/About";
import Market from "./pages/Market";

function App() {
  return (
    <BrowserRouter className="App">
      <Nav />
      <ScrollToTop /> {/* Add the ScrollToTop component here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Technology" element={<Technology />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Use_case" element={<UseCase />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/News_room" element={<NewsRoom />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Charge" element={<Charge />} />
        <Route exact path="/Fleets" element={<Fleets />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Ev_users" element={<EV_users />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/ev_manufacturer" element={<EV_Manufacturer />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/market" element={<Market />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
