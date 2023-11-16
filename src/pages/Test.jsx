import React from "react";
import { Footer } from "../components/Footer";
import { HeaderNormal } from "../components/Header-normal";
export const Test = () => {
  return (
    <div>
      <div className="header">
        <HeaderNormal></HeaderNormal>
      </div>

      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
};
