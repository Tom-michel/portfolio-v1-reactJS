import { AccountTree, GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { Avatar, Box, Grid, IconButton, Tooltip } from "@mui/material";
import bgContent from "@/assets/images/bgContent.png";
import profilePic from "@/assets/images/profilePic.jpeg";

import Image from "next/image";
import Experiences from "./Experiences";
import SectionTilte from "../SectionTitle";

const socials = [
  {
    id: 1,
    name: "LinkedIn",
    href: "https://linkedin.com/in/michel-btompe-3a0bb3234/",
    icon: <LinkedIn />,
    color: "",
  },
  {
    id: 2,
    name: "Twitter",
    href: "https://twitter.com/michelbtompe",
    icon: <Twitter />,
    color: "",
  },
  {
    id: 2,
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

const BannerSection = () => {
  return (
    <Box
      className="banner-section"
      sx={{
        position: "relative",
      }}
    >
      <Image
        className="bg-content"
        src={bgContent}
        alt=""
        style={{ maxWidth: "80%", height: "auto" }}
        priority
      />

      <Grid container alignItems={"center"}>
        <Grid
          sx={{ position: "relative", px: { xs: 0, sm: 2 } }}
          item
          xs={12}
          md={6}
        >
          <SectionTilte
            title="Michel Btompe"
            number="01"
            description={
              <>
                <span style={{ textTransform: "uppercase", fontWeight: 700 }}>
                  {" "}
                  You can call me <span className="textP">TOM</span>
                </span>{" "}
                <br />
                I'am a fullstack web/mobile developer and Ui Designer. I like to
                build or improve innovative solutions to everyday problems in
                society. I build profeessional web and modile app. <br />
                <span style={{ textTransform: "uppercase", fontWeight: 600 }}>
                  Based in Yaoundé, Available for Freelance Projects.
                </span>
              </>
            }
          />
          <div className="pt-3">
            {socials.map((social, index) => (
              <Tooltip key={index} title={social.name} arrow>
                <IconButton
                  sx={{ backgroundColor: "var(--cardBgColor)", mx: 0.5 }}
                  href={social.href}
                  target="_blank"
                >
                  {social.icon}
                </IconButton>
              </Tooltip>
            ))}
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            pl: { lg: 10 },
          }}
        >
          <Box
            sx={{
              position: "relative",
              border: "1px solid var(--primaryColorOp)",
              borderRadius: 2,
              mt: 13,
              textAlign: "center",
              maxWidth: { md: "90%", lg: "70%" },
            }}
          >
            <div>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                  pb: 10,
                  // pb: 3,
                }}
              >
                <Avatar
                  sx={{
                    width: "150px",
                    height: "150px",
                    position: "absolute",
                    top: -80,
                  }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={profilePic}
                    alt=""
                  />
                </Avatar>
              </Box>
              <Box
                sx={{
                  px: 3,
                  pb: 3,
                  pt: 3,
                }}
              >
                <h4 className="title">Experiences</h4>
                <Experiences />
              </Box>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BannerSection;
