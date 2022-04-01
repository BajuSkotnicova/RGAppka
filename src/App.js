import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Button from "./components/Button";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Button />
        <Banner />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
