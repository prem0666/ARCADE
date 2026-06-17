import React from "react";
import Content from "./Content";
import Categrou from "./Categrou";
import Product from "./Product";
import Slider from "./Slider";


const MainLayout = () => {
  return (
    <>
      <Slider />
      <Product />
      <Categrou />
      <Content />
    </>
  );
};

export default MainLayout;
