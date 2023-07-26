import "./style.scss"
import Nav from "./components/nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Nav />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
