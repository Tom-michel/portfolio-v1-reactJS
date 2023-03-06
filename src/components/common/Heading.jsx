import React from "react";

export const Heading = ({ title }) => {
  return (
    <h1 className="heading mb-5 pb-3">
      <span>{title}</span>
      {"( )"}
    </h1>
  );
};
