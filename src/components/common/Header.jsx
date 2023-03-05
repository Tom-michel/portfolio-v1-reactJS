import { brandlink, contactlink, navlink } from "../data/my-data";
import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="container d-flex align-items-center justify-content-between">
      <div className="nav-logo">
        {brandlink.map((brand) => (
          <Typography component="a" href={brand.url}>
            <img src={brand.img} alt="" />
          </Typography>
        ))}
      </div>
      <div className="nav-center d-none d-md-flex">
        {navlink.map((links) => (
          <Link to={links.url}>{links.text}</Link>
        ))}
      </div>
      <div className="nav-right">
        {contactlink.map((item, i) => (
          <Typography component="a" href={item.url} className="item">
            <img src={item.icon} alt="" className="icon" />
            <span className="d-none d-md-inline text">{item.text}</span>
          </Typography>
        ))}
      </div>
    </nav>
  );
};
