import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Banner from "./Banner";
import "./index.css";
import Firebase from "./firebase";

function App() {
  return (
    <div className="app">
      <h1></h1>

      <Home />
      <Header />
      <Banner />
      {/*<Firebase /> */}
    </div>
  );
}

export default App;
