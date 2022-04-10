import "./App.css";
import Routing from "./Routing";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routing />
      </Router>
    </div>
  );
};

export default App;
