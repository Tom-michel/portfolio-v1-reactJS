import React from "react";
import Navbar from "./Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className={inter.className}>{children}</div>
    </>
  );
}
