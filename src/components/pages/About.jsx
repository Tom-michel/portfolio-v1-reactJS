import {
  Code,
  DataObject,
  FileDownload,
  Handshake,
  RemoveRedEye,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import { PrimaryBtn, SecondaryBtn, ServiceBtn } from "../common/Buttons";
import { Heading } from "../common/Heading";
import { about } from "../data/my-data";

export const About = () => {
  return (
    <section id="about" className="bg-grid mt-5 py-5">
      <div className="container">
        <Heading title="aboutMe" param=" " />
        {about.map((about) => (
          <div className="row gap-md-0 gap-5 align-items-center">
            <div className="col-md-6">
              <p className="description pb-3">
                <span>{about.text}</span>
                <span className="t-gr t-code fw-bold ms-2">{about.user}</span>
              </p>
              <div className="d-flex my-3 gap-3">
                <PrimaryBtn icon={<FileDownload />} text="Download CV" />
                <SecondaryBtn icon={<RemoveRedEye />} text="View The CV" />
              </div>
            </div>
            <div className="col-md-6 aboutDiv">
              <div className="aboutBox">
                <p className="text">{about.role}</p>
                <ServiceBtn icon={<Handshake />} text="Services" />
              </div>
              <div className="bubble d-flex gap-2 justify-content-center">
                <Avatar>
                  <Code className="t-gr" />
                </Avatar>
                <Avatar>
                  <DataObject className="t-gr" />
                </Avatar>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
