import React from "react";
import { About } from "../pages/About";
import { Skills } from "../pages/Skills";
import { Banner } from "./Banner";

export const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Skills />
    </>
  );
};
