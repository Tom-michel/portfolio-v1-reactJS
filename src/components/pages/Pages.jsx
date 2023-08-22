import React from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { FloatingMenu } from "../common/FloatingMenu";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { Home } from "../home/Home";
import { ScrollTopBtn } from "../common/ScrollTopBtn";

export const Pages = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <FloatingMenu />
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <ScrollTopBtn />
      <Footer />
    </>
  );
};
