import Link from "next/link";

export default function Navbar() {
	return (
		<div className="navbar">
			<Link href="/">Home</Link>
			<Link href="/about">About Me</Link>
			<Link href="/projects">Projects</Link>
			<Link href="/dashboard">Dashboard</Link>
		</div>
	);
}
