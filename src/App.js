import "./App.css";
import Bar from "./components/Bar";
import Form from "./components/Form";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Router>
      <Bar />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
