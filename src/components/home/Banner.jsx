import React from "react";
import Typewriter from "typewriter-effect";
import { banner } from "../data/my-data";

export const Banner = () => {
  return (
    <>
      <div
        id="home"
        className="container pt-5 mt-md-5 mt-0 d-flex align-items-center"
      >
        <div className="row">
          <div className="col-md-6 text-md-start text-center">
            {banner.map((item) => (
              <>
                <p className="hello fw-bold">{item.hello}</p>
                <h1 className="name my-md-5 my-4 t-gr fw-bold">
                  <Typewriter
                    options={{
                      strings: [`${"< " + item.name + " />"}`],
                      autoStart: true,
                      loop: true,
                      // deleteSpeed: 20,
                    }}
                  />
                  {/* <span className="">{"< " + item.name + " />"}</span> */}
                </h1>
                <div className="mb-4">
                  {item.role.map((role) => (
                    <p className="role text-capitalize d-flex align-items-center justify-content-md-start justify-content-center gap-2 mb-1">
                      <span className="role-icon t-gr">{role.icon}</span>
                      <span className="role-text fw-bold">{role.text}</span>
                    </p>
                  ))}
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-md-start justify-content-center gap-xl-5 gap-3">
                  {item.done.map((val) => (
                    <>
                      <div className="exper d-flex align-items-center gap-1">
                        <p className="num fw-bold">{val.exper_num}</p>
                        <p className="num-text text-uppercase text-start">
                          <span>{val.exper_text.split("\n")[0]}</span>
                          <br />
                          <span>{val.exper_text.split("\n")[1]}</span>
                        </p>
                      </div>
                      <div className="project d-flex align-items-center gap-1">
                        <p className="num fw-bold">{val.project_num}</p>
                        <p className="num-text text-uppercase text-start">
                          <span>{val.project_text.split("\n")[0]}</span>
                          <br />
                          <span>{val.project_text.split("\n")[1]}</span>
                        </p>
                      </div>
                    </>
                  ))}
                </div>
              </>
            ))}
          </div>
          <div className="col-md-6 text-center">
            <div className="avatar">
              {banner.map((item) => (
                <img src={item.avatar} alt="" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
