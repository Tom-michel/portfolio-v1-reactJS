import React from "react";
import { Heading } from "../common/Heading";
import { skills } from "../data/my-data";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";

export const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <div className="container py-5">
        <Heading title="sKills" />
        {skills.map((skill) => (
          <>
            <p className="description">
              {skill.text}
              <TimelineSeparator>
                <TimelineDot
                  className="t-gr"
                  sx={{ backgroundColor: "black" }}
                />
              </TimelineSeparator>
            </p>
            <div className="technos">
              {skill.technos.map((tech) => (
                <div className="tech"></div>
              ))}
            </div>
          </>
        ))}
      </div>
    </section>
  );
};
