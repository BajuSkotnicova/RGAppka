import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Home from "./pages/Home";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Banner />
        <Home />
        <ImageSlider slides={SliderData} />
        <Footer />
        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
