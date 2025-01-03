import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { red } from "@mui/material/colors";

const Icons = () => {
  const gra = "linear-gradient(to right, red , yellow)";
  return (
    <div>
      <a href="#" target="_blank">
        <LinkedInIcon sx={{ color: "red" }} />
      </a>
      <XIcon />
    </div>
  );
};

export default Icons;
