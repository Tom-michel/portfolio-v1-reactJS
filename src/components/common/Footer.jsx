import React from "react";
import Box from '@mui/material/Box';
import { brandlink } from "../data/my-data";
import { Typography } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '4px', transform: 'scale(1)' }}
  >
    •
  </Box>
);

export const Footer = () => {
	
	return (
		<>
			<section id="footer">
				<div className="container py-3 d-flex flex-wrap gap-3 
					align-items-center justify-content-sm-between justify-content-center">
					<div className="nav-logo">
				    {brandlink.map((brand) => (
				      <Typography component="a" href={brand.url}>
				        <img src={brand.img} alt="" />
				      </Typography>
				    ))}
				  </div>
				  <div className="footer-text">
				  	<span>
				  		Apache Licence 2.0{bull}  
				  		<span className="fw-bold t-gr t-code text-decoration-underline">Tom-michel</span>{bull} 
				  		2023
				  	</span>
				  </div>
				</div>
			</section>
		</>
	)
}
