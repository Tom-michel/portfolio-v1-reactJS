import React from "react";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import { HireBtn } from "../common/Buttons";
import { HandshakeOutlined } from "@mui/icons-material";

export const ServiceCard = ({icon, title, desc, colorTitle, colorBg, colorBtn}) => {
  return (
    <>
    	<Card className="box-card d-flex flex-column align-items-center justify-content-between h-100" variant="outlined" 
    		sx={{ backgroundColor: colorBg, borderColor: colorTitle }}>
		    <CardContent>
		      <Typography className="d-flex flex-column align-items-center gap-3">
		        {icon}
		        <Typography sx={{ color: colorTitle }} variant="h5" component="div">
				      {title}
				    </Typography>
		      </Typography>
		      <Typography sx={{ color: "#fff", fontSize: 15+"px" }} className="text-center mt-3" variant="body2">
		        {desc}
		      </Typography>
		    </CardContent>
		    <CardActions>
		      <Button sx={{ color: colorTitle }} size="small" endIcon={<HandshakeOutlined />}>Hire Me</Button>
		    </CardActions>
		  </Card>
    </>
  );
};
