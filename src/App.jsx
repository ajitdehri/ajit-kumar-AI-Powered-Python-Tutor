import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Learn from "./components/Learn";
import Assignments from "./components/Assignments";

function App() {
  return (
    <div>
      <nav className="p-4 bg-blue-500 text-white flex space-x-4 ">
        <Link to="/" className="hover:text-black">Home</Link>
        <Link to="/learn" className="hover:text-black">Learn</Link>
        <Link to="/assignments" className="hover:text-black">Assignments</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/assignments" element={<Assignments />} />
      </Routes>
    </div>
  );
}

export default App;
