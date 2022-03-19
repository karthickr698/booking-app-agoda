import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import "react-big-calendar/lib/css/react-big-calendar.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
