import React from "react";
import { Heading } from "../common/Heading";
import { contacts } from "../data/my-data";

export const Contacts = () => {
  return (
    <section id="conatcts" className="bg-grid mt-5 py-5">
      <div className="container">
        <Heading title="contactMe" param=" " />
        {contacts.map((cont) => (
          <div className="row gap-md-0 gap-5 align-items-center">
            <div className="col-md-6 urlsContactDiv">
              <p className="description pb-3">
                <span>{cont.text}</span>
              </p>
              
            </div>
            <div className="col-md-6 formContactDiv">
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
