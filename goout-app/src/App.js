import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Jumbotron from "./Components/Jumbotron";
import Service from "./Components/Service";
import Package from "./Components/Package";
import Destination from "./Components/Destination";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Jumbotron />
      <Service />
      <Package />
      <Destination />
    </div>
  );
}

export default App;
