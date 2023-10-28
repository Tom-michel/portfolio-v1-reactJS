import React from "react";

const SectionTitle = ({
  title,
  number,
  description,
}: {
  title: string;
  number: string;
  description: React.ReactElement;
}) => {
  return (
    <>
      <h2 className="section-title">{title}</h2>
      <h5 className="text-on-back">{number}</h5>
      <p className="section-description">{description}</p>
    </>
  );
};

export default SectionTitle;
