import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Button from "./components/Button";
import "./index.css";

function App() {
  return (
    <>
      <div className="app">
        <Home />
        <Header />
        <Banner />
        <Button />
      </div>
    </>
  );
}

export default App;
