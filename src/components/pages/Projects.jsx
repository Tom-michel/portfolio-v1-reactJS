// import { Typography } from "@mui/material";
import React, { useState } from "react";
import { Heading } from "../common/Heading";
import { ProjectModal } from "../common/ProjectModal";
import { project, portfolio } from "../data/my-data";
import { ExpandLessOutlined, ExpandMoreOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import { CategoryBtn } from "../common/Buttons";
import { ProjectCard } from "../common/ProjectCard";

const allCategory = [/*"all", */...new Set(portfolio.map((item) => item.category))];

export const Projects = () => {
  const [list, setList] = useState(portfolio);
  const [category, setCategory] = useState(allCategory);
  console.log(setCategory);

  const [showAll, setShowAll] = useState(false);
  const projectsToShow = showAll ? list : list.slice(0, 4);

  const [selectedProject, setSelectedProject] = useState(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category);
    setList(newItems);

    /*if (category === "all") {
      setList(portfolio);
    }*/
  };

  return (
    <section id="projects" className="py-5 mb-3">
      <div className="container pt-3">
        <Heading title="projects" param={list.length} />
        {project.map((pro) => (
          <>
            <p className="description pb-3" data-aos="fade-in-zoom">
              Since i started codeing, I have worked and participated on many
              personal, professional and academic projetcs. Some of them are
              listed below and others can be found on my{" "}
              <a
                className="t-gr t-code fw-bold text-decoration-underline"
                target="blank"
                href={pro.github}
              >
                github
              </a>{" "}
              and{" "}
              <a
                className="t-gr t-code fw-bold text-decoration-underline"
                target="blank"
                href={pro.gitlab}
              >
                gitlab
              </a>{" "}
              accounts.{" "}
              <span className="fst-italic">
                (some of professional projects are in private mode !)
              </span>
            </p>
            <div className="d-flex flex-wrap my-3 gap-3">
            	
            	{!showAll && projectsToShow.length < list.length ? (
		            <Button
		              onClick={() => setShowAll(true)}
		              className="btn primaryBtn"
		              endIcon={<ExpandMoreOutlined />}
		              data-aos="fade-up"
		            >
		              Show All {list.length}
		            </Button>
		          ) : list.length > 4 ? (
		            <Button
		              onClick={() => setShowAll(false)}
		              className="btn primaryBtn"
		              endIcon={<ExpandLessOutlined />}
		              data-aos="fade-up"
		            >
		              Show Less
		            </Button>
		          ) : (
		            ""
		          )}
              {category.map((cat) => (
                <CategoryBtn
                  text={cat}
                  oncliClickAction={() => filterItems(cat)}
                />
              ))}
            </div>
            <div className="projects pt-3 d-flex flex-wrap gap-4 align-items-center justify-content-md-start justify-content-center">
              {projectsToShow.map((p) => (
                <>
                  <ProjectCard
                    tech={p.tech}
                    img=""
                    name={p.name}
                    category={p.category}
                    desc={p.desc}
                    onClickAction={() => {
                      setSelectedProject(p);
                      handleOpen();
                    }}
                  />
                </>
              ))}
            </div>
            {/*{!showAll && projectsToShow.length < list.length ? (
              <Button
                onClick={() => setShowAll(true)}
                className="btn primaryBtn my-5"
                endIcon={<ExpandMoreOutlined />}
              >
                Show All {list.length}
              </Button>
            ) : list.length > 4 ? (
              <Button
                onClick={() => setShowAll(false)}
                className="btn primaryBtn my-5"
                endIcon={<ExpandLessOutlined />}
              >
                Show Less
              </Button>
            ) : (
              ""
            )}*/}
            {selectedProject && (
              <ProjectModal
                my_project={selectedProject}
                open={open}
                setOpen={setOpen}
              />
            )}
          </>
        ))}
      </div>
    </section>
  );
};
