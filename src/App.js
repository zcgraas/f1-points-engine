import RaceTable from "./components/RaceTable";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Nav";
import Info from "./components/LandingInfo";

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
