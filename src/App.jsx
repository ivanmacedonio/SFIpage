import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Page1 } from "../src/pages/Page1";
import { Page2 } from "../src/pages/Page2";
import { Page3 } from "../src/pages/Page3";
import { Page4 } from "../src/pages/Page4";
import "./App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1></Page1>} />
          <Route path="/nosotros" element={<Page2></Page2>} />
          <Route path="/afiliacion" element={<Page3></Page3>} />
          <Route path="/blog" element={<Page4></Page4>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
