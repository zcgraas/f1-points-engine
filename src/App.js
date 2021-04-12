import RaceTable from "./Components/RaceTable";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Nav";
import Info from "./Components/LandingInfo";

function App() {
  return (
    <div style={{ background: "#343a40" }}>
      <Navigation />
      <Info />
      <RaceTable />
    </div>
  );
}

export default App;
