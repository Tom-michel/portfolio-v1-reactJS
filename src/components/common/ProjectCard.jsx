import React from "react";
import {
  Typography,
  Card,
  AspectRatio,
  //IconButton,
  CardOverflow,
  Divider,
  Link,
} from "@mui/joy";
import { /*Favorite,*/ RemoveRedEye } from "@mui/icons-material";
import { Avatar, AvatarGroup } from "@mui/material";

export const ProjectCard = ({
  tech,
  img,
  onClickAction,
  name,
  category,
  desc,
}) => {
  return (
    <>
      <Card
        className="card-project h-100"
        variant="solid"
        sx={{ width: 320, bgcolor: "#09090D" }}
      >
        <CardOverflow 
        	//data-aos="flip-left"
        >
          <AspectRatio ratio="2" 
          	//data-aos="flip-down"
          >
            <img
              src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
              srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
              loading="lazy"
              alt=""
              //data-aos="flip-up"
            />
          </AspectRatio>
          {/* <IconButton
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
          </IconButton> */}
        </CardOverflow>
        <Typography
          className="d-flex align-items-center"
          level="h2"
          sx={{ fontSize: "md", mt: 2 }}
        >
          <Link
            onClick={onClickAction}
            className="me-3"
            href={"#" + name.replace(/\s+/g, "-")}
            overlay
            underline="none"
            data-aos="flip-right"
          >
            <Typography fontSize="md">{name}</Typography>
          </Link>

          <span className="category me-1 mb-1 pt-1" data-aos="fade-left">{category}</span>
        </Typography>
        <Typography
          component="p"
          level="body2"
          sx={{ mt: 0.5, mb: 2, color: "#fff" }}
          data-aos="fade-up-right"
        >
          <span>{desc}</span>
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
            {tech.map((val) => (
              <Avatar
                className="project-tech"
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
                data-aos="fade-up-right"
              />
            ))}
          </AvatarGroup>
          <Divider orientation="vertical" />
          <Typography
            onClick={onClickAction}
            component="a"
            className="t-gr t-code d-flex align-items-center gap-2"
            href={"#" + name.replace(/\s+/g, "-")}
            level="body3"
            sx={{ fontWeight: "md", color: "text.secondary" }}
          >
            <span className="text-decoration-underline">Explore</span>
            <RemoveRedEye fontSize="small" />
          </Typography>
        </CardOverflow>
      </Card>
    </>
  );
};
