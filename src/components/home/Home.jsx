import React from "react";
import { About } from "../pages/About";
import { Skills } from "../pages/Skills";
import { Banner } from "./Banner";
import { Projects } from "../pages/Projects";
import { Contacts } from "../pages/Contacts";

export const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </>
  );
};
