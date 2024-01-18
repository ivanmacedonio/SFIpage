import { GoogleOAuthProvider } from "@react-oauth/google";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Activate } from "./pages/Activate";
import { BibliotecaForo } from "./pages/BibliotecaForo";
import { Blog } from "./pages/Blog";
import { BlogForo } from "./pages/BlogForo";
import { Checkout } from "./pages/Checkout";
import { CheckoutMonth } from "./pages/CheckoutMonth";
import { Contacto } from "./pages/Contacto";
import { Error404 } from "./pages/Error404";
import { FAQ } from "./pages/FAQ";
import { Forgot } from "./pages/Forgot";
import { Foro } from "./pages/Foro";
import { Hub } from "./pages/Hub";
import { Inicio } from "./pages/Inicio";
import { Login } from "./pages/Login";
import { Membresia } from "./pages/Membresia";
import { Page1 } from "./pages/Page1";
import { Page2 } from "./pages/Page2";
import { Page3 } from "./pages/Page3";
import { Perfil } from "./pages/Perfil";
import { Register } from "./pages/Register";
import { Reset } from "./pages/Reset";
import { Verificacion } from "./pages/Verificacion";
function App() {
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("access");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  const inactivityTimeout = 600000;
  const localStorageKey = "access";

  const App = () => {
    const [activityTimer, setActivityTimer] = useState(null);

    useEffect(() => {
      const handleActivity = () => {
        if (activityTimer) {
          clearTimeout(activityTimer);
        }

        const newTimer = setTimeout(() => {
          localStorage.removeItem(localStorageKey);
          console.log("Objeto eliminado debido a inactividad.");
        }, inactivityTimeout);

        setActivityTimer(newTimer);
      };

      handleActivity();

      window.addEventListener("mousemove", handleActivity);
      window.addEventListener("keydown", handleActivity);

      return () => {
        if (activityTimer) {
          clearTimeout(activityTimer);
        }
        window.removeEventListener("mousemove", handleActivity);
        window.removeEventListener("keydown", handleActivity);
      };
    }, [inactivityTimeout]);

    // Resto del componente...
  };

  return (
    <>
      <BrowserRouter>
        <GoogleOAuthProvider clientId="671123710035-o8jgq4gp7knk7jl1gg64na5jkhstgt6p.apps.googleusercontent.com">
          <Routes>
            <Route exact path="/" element={<Hub />} />
            <Route exact path="/activate" element={<Activate />} />
            <Route exact path="/biblioteca" element={<BibliotecaForo />} />
            <Route exact path="/news" element={<BlogForo />} />
            <Route exact path="/foro" element={<Foro />} />
            <Route exact path="/hub" element={<Page1 />} />
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
            <Route exact path="/checkoutMonth" element={<CheckoutMonth />} />
            <Route exact path="/forgot" element={<Forgot />} />
            <Route exact path="/changepassword" element={<Reset />} />

            <Route path="*" element={<Error404 />} />
          </Routes>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
