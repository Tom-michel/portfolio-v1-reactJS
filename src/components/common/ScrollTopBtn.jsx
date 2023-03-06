import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Fade from "@mui/material/Fade";
import React from "react";
import { ArrowUpward } from "@mui/icons-material";

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 200,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#home"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        className="to-top"
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export const ScrollTopBtn = () => {
  return (
    <>
      <ScrollTop>
        <Fab
          className="to-top-btn bg-dark"
          size="small"
          aria-label="scroll back to top"
        >
          <ArrowUpward className="t-gr" />
        </Fab>
      </ScrollTop>
    </>
  );
};
