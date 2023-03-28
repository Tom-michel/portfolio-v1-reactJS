import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import { banner } from "../data/my-data";
import VanillaTilt from 'vanilla-tilt';

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

export const Banner = () => {
	
	const options = {
    //scale: 1.2,
    speed: 1000,
    max: 30
  };
  
  return (
    <div
      id="home"
      className="container pt-5 mt-md-5 mt-0 d-flex align-items-center"
    >
      {banner.map((item) => (
		    <>
		      <div className="row mt-5 pt-4 align-items-center">
				      <div className="col-md-6 text-md-start text-center">
		            <p className="hello fw-bold" data-aos="fade-right">{item.hello}</p>
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
		                <p className="role text-capitalize d-flex align-items-center justify-content-md-start 
		                	justify-content-center gap-2 mb-1" data-aos="fade-left">
		                  <span className="role-icon t-gr">{role.icon}</span>
		                  <span className="role-text fw-bold">{role.text}</span>
		                </p>
		              ))}
		            </div>
		            <div className="d-flex align-items-center justify-content-md-start justify-content-center gap-md-5 gap-3">
		              {item.done.map((val) => (
		                <>
		                  <div className="exper d-flex align-items-center gap-1" data-aos="fade-up-right">
		                    <p className="num fw-bold">{val.exper_num}</p>
		                    <p className="num-text text-uppercase text-start">
		                      <span>{val.exper_text.split("\n")[0]}</span>
		                      <br />
		                      <span>{val.exper_text.split("\n")[1]}</span>
		                    </p>
		                  </div>
		                  <div className="project d-flex align-items-center gap-1" data-aos="fade-up-right">
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
				      </div>
				      <div className="col-md-6 mt-md-0 mt-5 text-center">
			          {item.avatar.map((av) => (
			            <Tilt options={options} className="circularAvatar mx-auto d-flex align-items-start 
			            	justify-content-center position-relative" data-aos="zoom-in-left">
										<div className="img position-relative">
											<img src={av.img} alt="" />
										</div>
										<div className="tech t1">
											<img src={av.tech1} alt="" />
										</div>
										<div className="tech t2">
											<img src={av.tech2} alt="" />
										</div>
										<div className="tech t3">
											<img src={av.tech3} alt="" />
										</div>
										<span className="dot d1"></span>
										<span className="dot d2"></span>
										<span className="dot d3"></span>
									</Tilt>
			          ))}
				      </div>
		      </div>
		    </>
		  ))}
    </div>
  );
};
