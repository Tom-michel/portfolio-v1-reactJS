import {
  AccountCircleOutlined,
  Close,
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
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const pages = [
  {
    id: 1,
    name: "About me",
    href: "/about",
    icon: <AccountCircleOutlined fontSize="small" />,
  },
  {
    id: 2,
    name: "Projects",
    href: "/projects",
    icon: <Webhook fontSize="small" />,
  },
  {
    id: 3,
    name: "Gallery",
    href: "/gallery",
    icon: <WebStoriesOutlined fontSize="small" />,
  },
];

const socials = [
  {
    id: 1,
    name: "LinkedIn",
    href: "https://linkedin.com/in/michel-btompe-3a0bb3234/",
    icon: <LinkedIn fontSize="small" />,
    color: "",
  },
  {
    id: 2,
    name: "Twitter",
    href: "https://twitter.com/michelbtompe",
    icon: <Twitter fontSize="small" />,
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

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Container>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            style={{
              marginRight: 2,
              fontSize: "16px",
            }}
          >
            <span style={{ fontWeight: 700 }}>TOM• </span> Portfolio
          </Link>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              {socials.map((social) => (
                <IconButton size="small">
                  <Typography
                    key={social.id}
                    component="a"
                    href={social.href}
                    target="_blank"
                    sx={{ mx: 0.5 }}
                  >
                    {social.icon}
                  </Typography>
                </IconButton>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
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
                  display: { xs: "block", md: "none" },
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
                      fontSize: "18px",
                    }}
                  >
                    TOM•Portfolio
                  </span>
                  <IconButton size="small" onClick={handleCloseNavMenu}>
                    <Close />
                  </IconButton>
                </Box>
                {socials.map((social) => (
                  <MenuItem key={social.id} onClick={handleCloseNavMenu}>
                    <Typography
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                        fontSize: "14px",
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
                        fontSize: "14px",
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
                <Button size="large" key={page.id} sx={{ display: "block" }}>
                  <Link style={{ fontSize: "14px" }} href={page.href}>
                    {page.name}
                  </Link>
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
