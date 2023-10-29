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
import SectionTilte from "../SectionTitle";

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
        sx={{
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
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
                    py: 0,
                    px: 0,
                    textTransform: "uppercase",
                    fontSize: "1.2rem",
                    opacity: 0.8,
                    ":hover": {
                      opacity: 1,
                    },
                    ":hover span": {
                      opacity: 1,
                      color: "var(--primaryColor)",
                      transition: "0.3s",
                      transform: "translateX(20px)",
                    },
                    "span, img": { transition: "0.3s" },
                    display: "flex",
                    justifyContent: "space-between",
                    overflow: "hidden",

                    ".imagePro": {
                      position: "relative",
                      height: 100,
                      width: 150,
                      overflow: "hidden",
                      transition: "0.3s",
                      bottom: -110,
                    },
                    ":hover .imagePro": {
                      overflow: "hidden",
                      transition: "0.3s",
                      bottom: 0,
                    },
                    ".imagePro img": {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    },
                  }}
                >
                  <span>{project.name}</span>
                  <div className="imagePro">
                    <Image src={profilePic} alt="" />
                  </div>
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Grid>
        <Grid sx={{ position: "relative" }} item xs={12} md={6}>
          <SectionTilte
            title="Projects"
            number="02"
            description={
              <>
                I have worked and participated on many projects: personal,
                freelance, enterprise and academic. The recents projects are
                listed below and others can be found on my{" "}
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
                  (Unfortunately, several enterprise projects are in private
                  mode)
                </span>
              </>
            }
          />
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
