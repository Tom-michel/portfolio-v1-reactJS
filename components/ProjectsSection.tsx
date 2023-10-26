import {
  AccountTree,
  Article,
  ArticleOutlined,
  GitHub,
} from "@mui/icons-material";
import { Box, Button, Grid, IconButton, Tooltip } from "@mui/material";
import Link from "next/link";

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

const ProjectsSection = () => {
  return (
    <Box className="projects-section" sx={{ my: 5, px: { xs: 0, sm: 2 } }}>
      <Grid
        container
        sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
      >
        <Grid item xs={12} md={6} sx={{ pt: { xs: 5, md: 5 } }}>
          <span style={{ fontSize: "1.3rem" }}>Recents Projects</span>
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
              <Tooltip title={social.name} arrow>
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
