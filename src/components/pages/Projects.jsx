// import { Typography } from "@mui/material";
import React, { useState } from "react";
import { Heading } from "../common/Heading";
import { ProjectModal } from "../common/ProjectModal";
import { project, portfolio } from "../data/my-data";
import {
  Typography,
  Card,
  AspectRatio,
  IconButton,
  CardOverflow,
  Divider,
  Link,
} from "@mui/joy";
import { Favorite, RemoveRedEye } from "@mui/icons-material";
import { Avatar, AvatarGroup, Button } from "@mui/material";

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))];

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

    if (category === "all") {
      setList(portfolio);
    }
  };
  
  
  return (
    <section id="projects" className="bg-grid py-5">
      <div className="container pt-3">
        <Heading title="projects" param={list.length} />
        {project.map((pro) => (
          <>
            <p className="description pb-3">
              Since i started codeing, I have worked and participated on many
              personal, professional and academic projetcs. Some of them are
              listed below and others can be found on my{" "}
              <a
                className="t-gr t-code fw-bold text-decoration-underline" target="blank"
                href={pro.github}
              >
                github
              </a>{" "}
              and{" "}
              <a
                className="t-gr t-code fw-bold text-decoration-underline" target="blank"
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
              {category.map((cat) => (
		          <Button
		            className="btn catBtn"
		            onClick={() => filterItems(cat)}
		          >
		            {cat}
		          </Button>
		      ))}
            </div>
            <div className="projects pt-3 d-flex flex-wrap gap-4 align-items-center justify-content-md-start justify-content-center">
              {projectsToShow.map((p) => (
                <>
                  <Card className="card-project" variant="solid" sx={{ width: 320, bgcolor: "#09090D" }}>
                    <CardOverflow>
                      <AspectRatio ratio="2">
                        <img
                          src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
                          srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                          loading="lazy"
                          alt=""
                        />
                      </AspectRatio>
                      <IconButton
                        aria-label="Like minimal photography"
                        size="sm"
                        variant="solid"
                        color="danger"
                        sx={{
                          position: "absolute",
                          zIndex: 2,
                          borderRadius: "50%",
                          right: "1rem",
                          bottom: 0,
                          transform: "translateY(50%)",
                        }}
                      >
                        <Favorite fontSize="small" />
                      </IconButton>
                    </CardOverflow>
                    <Typography
                      className="d-flex align-items-center"
                      level="h2"
                      sx={{ fontSize: "md", mt: 2 }}
                    >
                      <Link
                        onClick={() => {
						  setSelectedProject(p);
						  handleOpen();
						}}
                        className="me-3"
                        href={"#"+p.name.replace(/\s+/g, "-")}
                        overlay
                        underline="none"
                      >
                        <Typography fontSize="md">{p.name}</Typography>
                      </Link>

                        <span className="category me-1 mb-1 pt-1">{p.category}</span>

                    </Typography>
                    <Typography
                      component="p"
                      level="body2"
                      sx={{ mt: 0.5, mb: 2, color: "#fff", }}
                    >
                      <span>{p.desc}description</span>
                    </Typography>
                    <Divider inset="context" />
                    <CardOverflow
                      className="project-footer d-flex justify-content-between align-items-center"
                      variant="soft"
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        py: 1.5,
                        px: "var(--Card-padding)",
                        // bgcolor: "#25252D",
                      }}
                    >
                      <AvatarGroup className="gap-1" max={10}>
                        {p.tech.map((val) => (
                          <Avatar className="project-tech"
                            data-toggle="tooltip"
                            title={val.name}
                            alt={val.name}
                            src={val.img}
                            sx={{
                              width: 20,
                              height: 20,
                              // bgcolor: "#161616",
                              padding: 0.9,
                            }}
                          />
                        ))}
                      </AvatarGroup>
                      <Divider orientation="vertical" />
                      <Typography
                      	onClick={() => {
						  setSelectedProject(p);
						  handleOpen();
						}}
                        component="a"
                        className="t-gr t-code d-flex align-items-center gap-2"
                        href={"#"+p.name.replace(/\s+/g, "-")}
                        level="body3"
                        sx={{ fontWeight: "md", color: "text.secondary" }}
                      >
                        <span className="text-decoration-underline">
                          Explore
                        </span>
                        <RemoveRedEye fontSize="small" />
                      </Typography>
                    </CardOverflow>
                  </Card>
                </>
              ))}
            </div>
            { !showAll && projectsToShow.length < list.length ?
		        <Button onClick={() => setShowAll(true)} className="btn primaryBtn my-5" endIcon={<RemoveRedEye />}>
		          Show All {list.length}
		        </Button>
		      : (list.length > 4 ?
		        <Button onClick={() => setShowAll(false)} className="btn primaryBtn my-5" endIcon={<RemoveRedEye />}>
		          Show Less 
		        </Button> : "")
            }
            { selectedProject && <ProjectModal my_project={selectedProject} open={open} setOpen={setOpen} />}
          </>
        ))}
      </div>
    </section>
  );
};
