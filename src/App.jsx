import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Page1 } from "../src/pages/Page1";
import { Page2 } from "../src/pages/Page2";
import { Page3 } from "../src/pages/Page3";
import { Register } from "../src/pages/Register";
import "./App.css";
import { Blog } from "./pages/Blog";
import { Checkout } from "./pages/Checkout";
import { Contacto } from "./pages/Contacto";
import { Error404 } from "./pages/Error404";
import { FAQ } from "./pages/FAQ";
import { Inicio } from "./pages/Inicio";
import { Login } from "./pages/Login";
import { Membresia } from "./pages/Membresia";
import { Perfil } from "./pages/Perfil";
import { Verificacion } from "./pages/Verificacion";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/nosotros" element={<Page2 />} />
            <Route path="/afiliacion" element={<Page3 />} />
            <Route path="/register" element={<Register />} />
            <Route path="/membresia" element={<Membresia />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/verificacion" element={<Verificacion />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/404" element={<Error404 />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
