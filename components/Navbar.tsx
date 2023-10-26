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
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setShowIcon(true);
      } else {
        setShowIcon(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const btnMenuStyle = {
    backgroundColor: !Boolean(anchorElNav)
      ? "var(--cardBgColor)"
      : "var(--backgroundColor)",

    border: !Boolean(anchorElNav)
      ? "1px solid var(--cardBgColor)"
      : "1px solid var(--backgroundColor)",
    ":hover": {
      backgroundColor: "var(--primaryColorOp)",
      border: "1px solid var(--primaryColor)",
      backdropFilter: "blur(2px)",
    },
    transform: Boolean(anchorElNav) ? "rotate(-50deg)" : "none",
    transition: "0.3s",
  };

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
          <Container sx={{ px: { xs: 0, sm: "24px" } }}>
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
                className="brand"
              >
                <span style={{ fontWeight: 700 }}>TOM• </span>{" "}
                <span className="portfolio">Portfolio</span>
              </Link>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
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

                <Box sx={{ flexGrow: 0 }}>
                  <IconButton
                    // size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    sx={{
                      display: { xs: "flex", md: "none" },
                      "&&": btnMenuStyle,
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
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: {
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
                      {!showIcon && (
                        <IconButton
                          onClick={handleCloseNavMenu}
                          sx={btnMenuStyle}
                        >
                          <DragHandle />
                        </IconButton>
                      )}
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
            "&&": btnMenuStyle,
            position: "fixed",
            right: 20,
            top: 15,
            zIndex: 9999,
          }}
        >
          <DragHandle fontSize="large" />
        </IconButton>
      )}
    </>
  );
}
