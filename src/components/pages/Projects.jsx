import { Typography } from "@mui/material";
import React from "react";
import { Heading } from "../common/Heading";
import { project } from "../data/my-data";

export const Projects = () => {
  return (
    <section id="projects" className="bg-grid py-5">
      <div className="container pt-3">
        <Heading title="projects" />
        {project.map((pro) => (
          <>
            <p className="description pb-3">
              Since i started codeing, I have worked and participated on many
              personal, professional and academic projetcs. Some of them are
              listed below and others can be found on my{" "}
              <Typography
                component="a"
                href={pro.github}
                className="t-gr t-code fw-bold text-decoration-underline"
              >
                github
              </Typography>{" "}
              and{" "}
              <Typography
                component="a"
                href={pro.github}
                className="t-gr t-code fw-bold text-decoration-underline"
              >
                gitlab
              </Typography>{" "}
              accounts.{" "}
              <span className="fst-italic">
                (some of professional projects are in private mode)
              </span>
            </p>
            <div className="projectsDiv">
              {pro.item.map((p) => (
                <span>project</span>
              ))}
            </div>
          </>
        ))}
      </div>
    </section>
  );
};
