import { brandlink, contactlink, navlink } from "../data/my-data";
import { Typography } from "@mui/material";
import React from "react";

export const Header = () => {
	return (
		<div className="nav-section">
			<nav className="container d-flex align-items-center justify-content-between">
				<div className="nav-logo">
					{brandlink.map((brand) => (
						<Typography component="a" href={brand.url}>
							<img src={brand.img} alt="" />
						</Typography>
					))}
				</div>
				<div className="nav-center d-none d-md-flex gap-5">
					{navlink.map((links) => (
						// <Link className="fw-bold" to={links.url}>
						//   {links.text}
						// </Link>
						<Typography className="fw-bold" component="a" href={links.url}>
							{links.text}
						</Typography>
					))}
				</div>
				<div className="nav-right d-flex gap-3">
					{contactlink.map((item, i) => (
						<Typography
							component="a"
							target="_blank"
							href={item.url}
							className="item d-flex align-items-center gap-1"
						>
							<img src={item.icon} alt="" className="icon" />
							<span className="d-none d-xl-inline pt-1 fw-semibold text">
								{item.text}
							</span>
						</Typography>
					))}
				</div>
			</nav>
		</div>
	);
};
