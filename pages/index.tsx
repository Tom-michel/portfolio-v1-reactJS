import { AccountTree, GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Container,
  Grid,
  IconButton,
  Tooltip,
} from "@mui/material";
import Head from "next/head";
import bgContent from "@/assets/images/bgContent.png";
import profilePic from "@/assets/images/profilePic.jpeg";

import Image from "next/image";
import Experiences from "@/components/Experiences";

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

export default function Home() {
  return (
    <>
      <Head>
        <title>Michel Btompe</title>
        <meta
          name="description"
          content="Porfolio of Michel Btompe. Hier you get more information about me and my stack tools and technologies"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box className="profile-page" sx={{ position: "relative" }}>
        <Image
          className="bg-content"
          src={bgContent}
          alt=""
          style={{ maxWidth: "80%", height: "auto" }}
          priority
        />
        {/* <Container> */}
        <Grid container alignItems={"center"}>
          <Grid sx={{ position: "relative", px: 2 }} item xs={12} md={6}>
            <h1 className="profile-title">Michel Btompe</h1>
            <h5 className="text-on-back">01</h5>
            <p className="profile-description">
              <span style={{ textTransform: "uppercase", fontWeight: 700 }}>
                {" "}
                You can call me <span className="textP">TOM</span>
              </span>{" "}
              <br />
              I'am a fullstack web/mobile developer and Ui Designer. I like to
              build or improve innovative solutions to everyday problems in
              society. I build profeessional web and modile app.
            </p>
            <div className="btn-wrapper profile pt-3">
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
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
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
              // className="auth-card border border-1 border-success rounded-2 px-0 px-sm-3 px-md-0 px-lg-3 pb-4 pb-4 mt-5 mt-md-0"
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
                    // position: "relative",
                    // border: "1px solid var(--primaryColor)",
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
        {/* </Container> */}
      </Box>
    </>
  );
}
