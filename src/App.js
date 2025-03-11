import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import "@fontsource/inter"; // Default weight (400)
import "@fontsource/inter/400.css"; // Specific weight

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  </Router>
  );
}

export default App;
