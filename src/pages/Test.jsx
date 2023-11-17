import React from "react";
import { Carrouselp2 } from "../components/Carrouselp2";
import { Footer } from "../components/Footer";
import { HeaderNormal } from "../components/Header-normal";
export const Test = () => {
  return (
    <div>
      <div className="header">
        <HeaderNormal></HeaderNormal>
      </div>
      <div className="carrousel">
        <Carrouselp2></Carrouselp2>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
};
