import React from "react";
import { Heading } from "../common/Heading";
import { skills } from "../data/my-data";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import { StarBorderSharp } from "@mui/icons-material";

export const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <div className="container py-3">
        <div className="row">
          <Heading title="skills" param=" " />
          {skills.map((skill) => (
            <>
              <p className="description">{skill.text}</p>
              <div className="technos mt-3 d-flex flex-wrap align-items-end gap-sm-4 gap-3">
                {skill.technos.map((tech) => (
                  <div className="tech d-flex flex-column align-items-center justify-content-center">
                    <img className="techImg" src={tech.img} alt="techImg" />
                    <div className="techNameDot d-flex align-items-center justify-content-center gap-1">
                      {tech.starred ? (
                        <StarBorderSharp
                          sx={{ fontSize: { xs: 12, sm: 13, md: 15 } }}
                        />
                      ) : (
                        ""
                      )}
                      <TimelineSeparator className="dot">
                        <TimelineDot
                          className="t-gr"
                          sx={{
                            backgroundColor: tech.dots,
                            padding: {
                              xs: 2 + "px",
                              md: 3 + "px",
                              xl: 4 + "px",
                            },
                          }}
                        />
                      </TimelineSeparator>
                      <div className="name">{tech.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};
