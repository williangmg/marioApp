// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarTopo from "./components/navBarTopo";
import Home from "./pages/home";
import Contato from "./pages/contato";  // Crie esse arquivo depois

function App() {
  return (
    <BrowserRouter>
      <NavBarTopo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
