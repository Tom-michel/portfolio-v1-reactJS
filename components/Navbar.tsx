import {
  AccountCircleOutlined,
  Close,
  DragHandle,
  LinkedIn,
  Menu as MenuIcon,
  Twitter,
  WebStoriesOutlined,
  Webhook,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Inter } from "next/font/google";
import Link from "next/link";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const pages = [
  {
    id: 1,
    name: "About me",
    href: "/about",
    icon: <AccountCircleOutlined />,
  },
  {
    id: 2,
    name: "Projects",
    href: "/projects",
    icon: <Webhook />,
  },
  {
    id: 3,
    name: "Gallery",
    href: "/gallery",
    icon: <WebStoriesOutlined />,
  },
];

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
];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [showIcon, setShowIcon] = useState(false);
  // const resizeWindow = () => {
  //   if (
  //     document.documentElement.scrollTop > 99 ||
  //     document.body.scrollTop > 99
  //   ) {
  //     setShowIcon(true);
  //   } else {
  //     setShowIcon(false);
  //   }
  // };
  // resizeWindow();

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          py: 0.315,
        }}
      >
        <Container>
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              "& a": { fontSize: "20px" },
            }}
          >
            <Link
              href="/"
              style={{
                marginRight: 2,
              }}
            >
              <span style={{ fontWeight: 700 }}>TOM• </span> Portfolio
            </Link>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {socials.map((social) => (
                  <IconButton size="small" sx={{ py: 0 }}>
                    <Typography
                      key={social.id}
                      component="a"
                      href={social.href}
                      target="_blank"
                      sx={{ mx: 0.5, display: "flex", alignItems: "center" }}
                    >
                      {social.icon}
                    </Typography>
                  </IconButton>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  // size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  sx={{
                    backgroundColor: !Boolean(anchorElNav)
                      ? "var(--cardBgColor)"
                      : "var(--backgroundColor)",

                    border: !Boolean(anchorElNav)
                      ? "1px solid var(--cardBgColor)"
                      : "1px solid var(--backgroundColor)",
                    transition: "0.3s",
                    ":hover": {
                      transform: "rotate(-30deg)",
                      backgroundColor: "var(--primaryColorOp)",
                      border: "1px solid var(--primaryColor)",
                    },
                  }}
                >
                  <DragHandle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: {
                      xs: "block",
                      md: "none",
                      a: { fontSize: "17px" },
                      span: { fontSize: "20px" },
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      px: 2,
                      py: 1,
                    }}
                  >
                    <span
                      style={{
                        color: "var(--primaryColor)",
                        fontWeight: 700,
                      }}
                    >
                      TOM•Portfolio
                    </span>
                    {/* <IconButton size="small" onClick={handleCloseNavMenu}>
                      <Close />
                    </IconButton> */}
                  </Box>
                  {socials.map((social) => (
                    <MenuItem key={social.id} onClick={handleCloseNavMenu}>
                      <Typography
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          gap: "15px",
                        }}
                        component="a"
                        href={social.href}
                      >
                        {social.icon} {social.name}
                      </Typography>
                    </MenuItem>
                  ))}
                  {pages.map((page) => (
                    <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                      <Link
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          gap: "15px",
                        }}
                        href={page.href}
                      >
                        {page.icon} {page.name}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Link
                    key={page.id}
                    href={page.href}
                    style={{ margin: "0 0.75rem" }}
                  >
                    {page.name}
                  </Link>
                ))}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {showIcon && (
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={(e) => {
            if (!Boolean(anchorElNav)) {
              handleOpenNavMenu(e);
            } else {
              handleCloseNavMenu();
            }
          }}
          sx={{
            backgroundColor: !Boolean(anchorElNav)
              ? "var(--cardBgColor)"
              : "var(--backgroundColor)",

            border: !Boolean(anchorElNav)
              ? "1px solid var(--cardBgColor)"
              : "1px solid var(--backgroundColor)",
            transition: "0.3s",
            ":hover": {
              transform: "rotate(-30deg)",
              backgroundColor: "var(--primaryColorOp)",
              border: "1px solid var(--primaryColor)",
            },
            position: "absolute",
            right: 20,
            top: 15,
            zIndex: 9999,
          }}
        >
          {!Boolean(anchorElNav) ? (
            <DragHandle fontSize="large" />
          ) : (
            <Close fontSize="large" />
          )}
        </IconButton>
      )}
    </>
  );
}
