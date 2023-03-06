import { Button } from "@mui/material";
import React from "react";
import { floatinglink } from "../data/my-data";

export const FloatingMenu = () => {
  return (
    <div className="floatingMenu d-flex flex-column d-md-none align-items-center justify-content-center">
      {floatinglink.map((item, i) => (
        <Button
          className="floatingItem d-flex justify-content-start"
          sx={{ backgroundColor: item.color }}
          href={item.url}
        >
          <img src={item.icon} alt="" />
        </Button>
      ))}
    </div>
  );
};
