import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Page1 } from "../src/pages/Page1";
import { Page2 } from "../src/pages/Page2";
import { Page3 } from "../src/pages/Page3";
import { Register } from "../src/pages/Register";
import "./App.css";
import { PurchaseProvider } from "./context/PurchaseContext";
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
        <PurchaseProvider>
          <Routes>
            <Route exact path="/" element={<Page1 />} />
            <Route exact path="/nosotros" element={<Page2 />} />
            <Route exact path="/afiliacion" element={<Page3 />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/membresia" element={<Membresia />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/faq" element={<FAQ />} />
            <Route exact path="/contacto" element={<Contacto />} />
            <Route exact path="/inicio" element={<Inicio />} />
            <Route exact path="/perfil" element={<Perfil />} />
            <Route exact path="/verificacion" element={<Verificacion />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </PurchaseProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
