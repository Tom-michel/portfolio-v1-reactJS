import React, { useEffect, useRef } from "react";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import { StarBorderSharp } from "@mui/icons-material";
import VanillaTilt from 'vanilla-tilt';

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

export const SkillTechno = ({ img, color, name, starred }) => {
	
	const options = {
    //scale: 1.2,
    speed: 1000,
    max: 30
  };	
	
  return (
    <Tilt options={options}>
      <div className="tech d-flex flex-column align-items-center 
      	justify-content-cente px-sm-5 px-0 h-100" data-aos="zoom-out-down">
        <img className="techImg" src={img} alt="techImg" />
        <div className="techNameDot d-flex align-items-center justify-content-center gap-1">
          {starred ? (
            <StarBorderSharp sx={{ fontSize: { xs: 12, sm: 13, md: 15 } }} />
          ) : (
            ""
          )}
          <TimelineSeparator className="dot">
            <TimelineDot
              className="t-gr"
              sx={{
                backgroundColor: color,
                padding: {
                  xs: 2 + "px",
                  md: 3 + "px",
                  xl: 4 + "px",
                },
              }}
            />
          </TimelineSeparator>
          <div className="name">{name}</div>
        </div>
      </div>
    </Tilt>
  );
};
