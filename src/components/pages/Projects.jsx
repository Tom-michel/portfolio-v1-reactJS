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
import { Favorite } from "@mui/icons-material";

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
              <a href={pro.github}>github</a>
              {/* <Typography
                component="a"
                href={pro.github}
                className="t-gr t-code fw-bold text-decoration-underline"
              >
                github
              </Typography>{" "} */}
              and{" "}
              {/* <Typography
                component="a"
                href={pro.github}
                className="t-gr t-code fw-bold text-decoration-underline"
              >
                gitlab
              </Typography>{" "} */}
              accounts.{" "}
              <span className="fst-italic">
                (some of professional projects are in private mode)
              </span>
            </p>
            <div className="projectsDiv d-flex flex-wrap gap-4 align-items-center justify-content-center">
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
                        size="md"
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
                        <Favorite />
                      </IconButton>
                    </CardOverflow>
                    <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                      <Link href="#multiple-actions" overlay underline="none">
                        Yosemite National Park
                      </Link>
                    </Typography>
                    <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                      <Link href="#multiple-actions">California</Link>
                    </Typography>
                    <Divider inset="context" />
                    <CardOverflow
                      variant="soft"
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        py: 1.5,
                        px: "var(--Card-padding)",
                        bgcolor: "#25252D",
                      }}
                    >
                      <Typography
                        level="body3"
                        sx={{ fontWeight: "md", color: "text.secondary" }}
                      >
                        6.3k views
                      </Typography>
                      <Divider orientation="vertical" />
                      <Typography
                        level="body3"
                        sx={{ fontWeight: "md", color: "text.secondary" }}
                      >
                        1 hour ago
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
