import React from "react";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import { StarBorderSharp } from "@mui/icons-material";

export const SkillTechno = ({ img, color, name, starred }) => {
  return (
    <>
      <div className="tech d-flex flex-column align-items-center justify-content-center">
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
                backgroundColor: { color },
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
    </>
  );
};
