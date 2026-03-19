import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/gallery">Gallery</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;