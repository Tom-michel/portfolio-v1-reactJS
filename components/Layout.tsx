import React from "react";
import Navbar from "./Navbar";
import { Inter } from "next/font/google";
import { Box, Container } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 10 }} className={inter.className}>
        {children}
      </Container>
    </>
  );
}
