import React from "react";
import Typewriter from "typewriter-effect";
import { banner } from "../data/my-data";

export const Banner = () => {
  return (
    <>
      <div id="home" className="container d-flex align-items-center">
        <div className="row">
          <div className="col-md-6">
            {banner.map((item) => (
              <>
                <p className="hello fw-bold">{item.hello}</p>
                <h1 className="name my-5 t-gr fw-bold">
                  {/* <Typewriter
                    options={{
                      strings: [`${"< " + item.name + " />"}`],
                      autoStart: true,
                      loop: true,
                      // deleteSpeed: 20,
                    }}
                  /> */}
                  <span className="">{"< " + item.name + " />"}</span>
                </h1>
                <div className="mb-4">
                  {item.role.map((role) => (
                    <p className="role text-capitalize d-flex align-items-center gap-2 mb-1">
                      <span className="role-icon t-gr">{role.icon}</span>
                      <span className="role-text fw-bold">{role.text}</span>
                    </p>
                  ))}
                </div>
                <div className="d-flex align-items-center gap-5">
                  {item.done.map((val) => (
                    <>
                      <div className="exper d-flex align-items-center gap-1">
                        <p className="num fw-bold">{val.exper_num}</p>
                        <p className="num-text text-uppercase">
                          <span>{val.exper_text.split("\n")[0]}</span>
                          <br />
                          <span>{val.exper_text.split("\n")[1]}</span>
                        </p>
                      </div>
                      <div className="project d-flex align-items-center gap-1">
                        <p className="num fw-bold">{val.project_num}</p>
                        <p className="num-text text-uppercase">
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
          <div className="col-md-6">
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
