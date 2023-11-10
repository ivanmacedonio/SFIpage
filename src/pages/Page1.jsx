import React from "react";
import { Footer } from "../components/Footer";
import { HeaderNormal } from '../components/Header-normal';
import "../styles/page1.css";
export const Page1 = () => {
  return (
    <div className="page1">
      <div className="header">
        <HeaderNormal></HeaderNormal>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
};
