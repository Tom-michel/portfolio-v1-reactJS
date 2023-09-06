import React, { useEffect, useRef } from "react";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import { HireBtn } from "../common/Buttons";
import { HandshakeOutlined } from "@mui/icons-material";
import VanillaTilt from "vanilla-tilt";

function Tilt(props) {
	const { options, ...rest } = props;
	const tilt = useRef(null);

	useEffect(() => {
		VanillaTilt.init(tilt.current, options);
	}, [options]);

	return <div ref={tilt} {...rest} />;
}

export const ServiceCard = ({
	icon,
	title,
	desc,
	colorTitle,
	colorBg,
	colorBtn,
}) => {
	const options = {
		//scale: 1.2,
		speed: 1000,
		max: 30,
	};

	return (
		<Tilt options={options} className="h-100">
			<Card
				className="box-card d-flex flex-column align-items-center 
    		justify-content-between h-100"
				variant="outlined"
				sx={{ backgroundColor: colorBg, borderColor: colorTitle }}
				data-aos="zoom-out-down"
			>
				<CardContent>
					<Typography className="d-flex flex-column align-items-center gap-3">
						{icon}
						<Typography sx={{ color: colorTitle }} variant="h5" component="div">
							{title}
						</Typography>
					</Typography>
					<Typography
						sx={{ color: "#fff", fontSize: 15 + "px" }}
						className="text-center mt-3"
						variant="body2"
					>
						{desc}
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						sx={{ color: colorTitle }}
						size="small"
						endIcon={<HandshakeOutlined />}
						data-aos="fade-up-right"
					>
						Hire Me
					</Button>
				</CardActions>
			</Card>
		</Tilt>
	);
};
