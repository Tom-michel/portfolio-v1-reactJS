import { Button } from "@mui/material";
import React from "react";

export const PrimaryBtn = ({ icon, text, href }) => {
  return (
    <>
      <Button
        className="btn primaryBtn"
        type="submit"
        endIcon={icon}
        data-aos="fade-down-right"
      >
        <a href={href} download>
          {text}
        </a>
      </Button>
    </>
  );
};

export const SecondaryBtn = ({ icon, text, href }) => {
  return (
    <>
      <Button
        className="btn secondaryBtn"
        endIcon={icon}
        href={href}
        data-aos="fade-down-right"
      >
        {text}
      </Button>
    </>
  );
};

export const ServiceBtn = ({ icon, text }) => {
  return (
    <>
      <Button
        href="#services"
        className="btn serviceBtn"
        endIcon={icon}
        data-aos="fade-down-right"
      >
        {text}
      </Button>
    </>
  );
};

export const SendMailBtn = ({ icon, text, clickAction }) => {
  return (
    <>
      <Button
        className="btn sendMail"
        type="submit"
        endIcon={<img src={icon} alt="" />}
        onClick={clickAction}
        //data-aos="fade-down-right"
      >
        {text}
      </Button>
    </>
  );
};

export const SendZapBtn = ({ icon, text, clickAction }) => {
  return (
    <>
      <Button
        className="btn primaryBtn"
        type="submit"
        endIcon={<img src={icon} alt="" />}
        onClick={clickAction}
        //data-aos="fade-down-right"
      >
        {text}
      </Button>
    </>
  );
};

export const CategoryBtn = ({ text, oncliClickAction }) => {
  return (
    <>
      <Button
        className="btn catBtn"
        onClick={oncliClickAction}
        data-aos="fade-down-right"
      >
        {text}
      </Button>
    </>
  );
};

export const HireBtn = ({ icon, text, color }) => {
  return (
    <>
      <Button
        className="btn primaryBtn hireBtn"
        endIcon={icon}
        data-aos="fade-down-right"
      >
        {text}
      </Button>
    </>
  );
};
