import { Button } from "@mui/material";
import React from "react";

export const PrimaryBtn = ({ icon, text }) => {
  return (
    <>
      <Button className="btn primaryBtn" type="submit" endIcon={icon}>
        {text}
      </Button>
    </>
  );
};

export const SecondaryBtn = ({ icon, text }) => {
  return (
    <>
      <Button className="btn secondaryBtn" endIcon={icon}>
        {text}
      </Button>
    </>
  );
};

export const ServiceBtn = ({ icon, text }) => {
  return (
    <>
      <Button href="#services" className="btn serviceBtn" endIcon={icon}>
        {text}
      </Button>
    </>
  );
};

export const SendMailBtn = ({ icon, text }) => {
  return (
    <>
      <Button
        className="btn sendMail"
        type="submit"
        endIcon={<img src={icon} alt="" />}
      >
        {text}
      </Button>
    </>
  );
};

export const SendZapBtn = ({ icon, text }) => {
  return (
    <>
      <Button
        className="btn primaryBtn"
        type="submit"
        endIcon={<img src={icon} alt="" />}
      >
        {text}
      </Button>
    </>
  );
};

export const CategoryBtn = ({ text, oncliClickAction }) => {
  return (
    <>
      <Button className="btn catBtn" onClick={oncliClickAction}>
        {text}
      </Button>
    </>
  );
};
