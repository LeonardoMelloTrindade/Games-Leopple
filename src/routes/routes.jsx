import Login from "../pages/Login/login";
import Home from "../pages/Home/home";
import EditarPerfil from "../pages/EditarPerfil/editarPerfil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function routes() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/EditarPerfil" element={<EditarPerfil />} />
      </Routes>
    </Router>
  );
}
