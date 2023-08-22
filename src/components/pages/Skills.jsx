import React from "react";
import { Heading } from "../common/Heading";
import { skills } from "../data/my-data";
import { SkillTechno } from "../common/SkillTechno";

export const Skills = () => {
  return (
    <section id="skills" className="bg_dark py-5 w-100">
      <div className="container py-3">
        <div className="row">
          <Heading title="skills" param=" " />
          {skills.map((skill) => (
            <>
              <p className="description" data-aos="fade-in-zoom">{skill.text}</p>
              <div className="technos mt-3 d-flex flex-wrap align-items-end gap-sm-2 gap-3">
                {skill.technos.map((tech) => (
                  <SkillTechno
                    img={tech.img}
                    color={tech.dots}
                    name={tech.name}
                    starred={tech.starred}
                  />
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};
