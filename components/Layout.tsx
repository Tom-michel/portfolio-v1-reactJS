import React from "react";
import Navbar from "./Navbar";
import { Box, Container } from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div
        style={{
          overflowX: "hidden",
        }}
      >
        <Container>{children}</Container>
      </div>
    </>
  );
}
