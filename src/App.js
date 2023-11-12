import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./components/HomePage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
