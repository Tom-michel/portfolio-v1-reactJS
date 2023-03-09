// import { Typography } from "@mui/material";
import React from "react";
import { Heading } from "../common/Heading";
import { project } from "../data/my-data";
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
import { Avatar, AvatarGroup } from "@mui/material";

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
              <a
                className="t-gr t-code fw-bold text-decoration-underline"
                href={pro.github}
              >
                github
              </a>{" "}
              and{" "}
              <a
                className="t-gr t-code fw-bold text-decoration-underline"
                href={pro.gitlab}
              >
                gitlab
              </a>{" "}
              accounts.{" "}
              <span className="fst-italic">
                (some of professional projects are in private mode)
              </span>
            </p>
            <div className="projects d-flex flex-wrap gap-4 align-items-center justify-content-center">
              {pro.item.map((p) => (
                <>
                  <Card variant="solid" sx={{ width: 320, bgcolor: "#09090D" }}>
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
                      className="d-flex align-items-center gap-3"
                      level="h2"
                      sx={{ fontSize: "md", mt: 2 }}
                    >
                      <Link href="#multiple-actions" overlay underline="none">
                        <Typography fontSize="md">{p.name}</Typography>
                      </Link>
                      <span className="category mb-1">{p.category}</span>
                    </Typography>
                    <Typography
                      component="p"
                      level="body2"
                      sx={{ mt: 0.5, mb: 2 }}
                    >
                      <span>{p.desc}description</span>
                    </Typography>
                    <Divider inset="context" />
                    <CardOverflow
                      className="d-flex justify-content-between align-items-center"
                      variant="soft"
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        py: 1.5,
                        px: "var(--Card-padding)",
                        bgcolor: "#25252D",
                      }}
                    >
                      <AvatarGroup className="gap-1" max={10}>
                        {p.tech.map((val) => (
                          <Avatar
                            data-toggle="tooltip"
                            title={val.name}
                            alt={val.name}
                            src={val.img}
                            sx={{
                              width: 15,
                              height: 15,
                              bgcolor: "#161616",
                              padding: 0.9,
                            }}
                          />
                        ))}
                      </AvatarGroup>
                      <Divider orientation="vertical" />
                      <Typography
                        component="a"
                        className="t-gr t-code d-flex align-items-center gap-2"
                        href=""
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
          </>
        ))}
      </div>
    </section>
  );
};
