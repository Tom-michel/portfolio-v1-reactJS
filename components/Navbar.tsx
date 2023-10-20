import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <nav
      className={`navbar ${inter.className}`}
      style={{ backgroundColor: "#000", color: "#fff" }}
    >
      <Link href="/">Home</Link>
      <Link href="/about">About Me</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/dashboard">Dashboard</Link>
    </nav>
  );
}
