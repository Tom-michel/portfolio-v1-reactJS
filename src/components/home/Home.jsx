import React from "react";
import { About } from "../pages/About";
import { Skills } from "../pages/Skills";
import { Banner } from "./Banner";
import { ScrollTopBtn } from "../common/ScrollTopBtn";

export const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <ScrollTopBtn />
    </>
  );
};
