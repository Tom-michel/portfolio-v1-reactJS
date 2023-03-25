import React from "react";
import { Heading } from "../common/Heading";
import { Box } from "@mui/material";
import { ServiceCard } from "../common/ServiceCard";
import {services} from "../data/my-data";

export const Services = () => {
  return (
    <>
      <section id="services" className="bg-grid pt-5 pb-3">
        <div className="container">
          <Heading title="services" param=" " />
        
		      <div className="boxes pt-2 pb-5 d-flex flex-wrap gap-4 justify-content-center">
		        {services.map((service) => (
		        	<Box className="box" sx={{ width: 320 }}>
				      	<ServiceCard icon={service.icon} title={service.title} desc={service.desc} colorTitle={service.colorTitle} colorBg={service.colorBg} colorBtn={service.colorBtn} />
				      </Box>
		        ))}
		      </div>
		  	</div>
      </section>
    </>
  );
};
