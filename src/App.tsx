import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";

function App() {
  return (
    <>
      <Routes>
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/portfolio/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
