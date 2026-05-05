import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">Urban Insights</Link>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/gallery" className="nav-link">Gallery</Link>
        </div>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;