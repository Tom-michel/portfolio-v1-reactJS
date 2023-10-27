import { AccountTree, ArticleOutlined, GitHub } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  List,
  ListItemButton,
  Tooltip,
} from "@mui/material";
import Link from "next/link";

import profilePic from "@/assets/images/profilePic.jpeg";
import Image from "next/image";

const socials = [
  {
    id: 1,
    name: "GitHub",
    href: "https://github.com/Tom-michel/",
    icon: <GitHub />,
    color: "",
  },
  {
    id: 2,
    name: "GitLab",
    href: "https://gitlab.com/Tom-michel/",
    icon: <AccountTree />,
    color: "",
  },
];

const recentsProjects = [
  {
    name: "TheTipTop Jeux-concours",
    slug: "thetiptop",
  },
  {
    name: "Dolphprint Chat App",
    slug: "dolphprint-chat-app",
  },
  {
    name: "Student Card UY1",
    slug: "sc-uy1",
  },
  {
    name: "Outlook Calendar clone",
    slug: "outlook-clone",
  },
  {
    name: "Flood Alert",
    slug: "flood-alert",
  },
];

const ProjectsSection = () => {
  return (
    <Box className="projects-section" sx={{ my: 5, px: { xs: 0, sm: 2 } }}>
      <Grid
        container
        sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{ pt: { xs: 5, md: 0 }, pr: { xs: 0, md: 5 } }}
        >
          <div
            style={{
              fontSize: "1rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <span>Recents Projects</span>
            <Link className="textP" href={"/projects"}>
              View all
            </Link>
          </div>
          <List>
            <Divider
              sx={{
                borderTop: "1px solid var(--foregroundColor)",
                opacity: 0.8,
              }}
            />
            {recentsProjects.map((project, index) => (
              <Link key={index} href={`projects/${project.slug}`}>
                <ListItemButton
                  sx={{
                    borderBottom: "1px solid var(--foregroundColor)",
                    py: 2,
                    pl: 0,
                    textTransform: "uppercase",
                    fontSize: "1.2rem",
                    opacity: 0.8,
                    ":hover": {
                      opacity: 1,
                    },
                    ":hover span": {
                      opacity: 1,
                      transition: "0.3s",
                      transform: "translateX(20px)",
                    },
                    "span, img": { transition: "0.3s" },
                    display: "flex",
                    justifyContent: "space-between",
                    overflow: "hidden",

                    img: {
                      maxHeight: 0,
                      width: "auto",
                      objectFit: "cover",
                      // transform: "translateY(200px)",
                    },
                    ":hover img": {
                      maxHeight: 110,
                      width: "auto",
                      transform: "translateY(0px)",
                      transition: "0.3s",
                    },
                  }}
                >
                  <span>{project.name}</span>
                  <Image src={profilePic} alt="" />
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Grid>
        <Grid sx={{ position: "relative" }} item xs={12} md={6}>
          <h2 className="section-title">Projects</h2>
          <h5 className="text-on-back">02</h5>
          <p className="section-description">
            I have worked and participated on many projects: personal,
            freelance, enterprise and academic. The recents projects are listed
            below and others can be found on my{" "}
            <Link
              href="https://github.com/Tom-michel/"
              target="_blank"
              className="textP"
            >
              github
            </Link>{" "}
            and{" "}
            <Link
              href="https://gitlab.com/Tom-michel/"
              target="_blank"
              className="textP"
            >
              gitlab
            </Link>{" "}
            accounts.{" "}
            <span style={{ fontStyle: "italic" }}>
              (Unfortunately, several enterprise projects are in private mode)
            </span>
          </p>
          <div className="pt-3">
            {socials.map((social) => (
              <Tooltip key={social.id} title={social.name} arrow>
                <IconButton
                  sx={{ backgroundColor: "var(--cardBgColor)", mx: 0.5 }}
                  href={social.href}
                  target="_blank"
                >
                  {social.icon}
                </IconButton>
              </Tooltip>
            ))}
            <Link href="/about#cv">
              <Button
                sx={{
                  backgroundColor: "var(--cardBgColor)",
                  mx: 0.5,
                  color: "var(--foregroundColor)",
                }}
                startIcon={<ArticleOutlined />}
              >
                View the CV
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectsSection;
