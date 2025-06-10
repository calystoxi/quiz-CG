import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./components/quiz";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;

