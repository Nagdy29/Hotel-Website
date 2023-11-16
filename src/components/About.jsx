import React from "react";
import about from "../Images/about-img-1.jpg";
import feature from "../Images/feature-img-1.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { AboutTittle } from "./AboutTittle";

export const About = () => {
  return (
    <>
      <AboutTittle />
      <div className="container-fluid">
        <div className="row d-flex">
          <div className="col-md-6 mx-4 my-4">
            <h3 className="about">about us</h3>
            <h2 className="fw-bold w-75">
              We Provider Soulation to grow your bussines
            </h2>
            <p className="fw-light w-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              odio accusantium rem ullam, minus et animi itaque? Quasi,
              doloremque at.
            </p>
            <p className="fw-light w-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              odio accusantium rem ullam, minus et animi itaque? Quasi,
              doloremque at.
            </p>
            <button className="btn btn-success">
              Exploer More <FaArrowRightLong />{" "}
            </button>
          </div>
          <div className="col-md-4">
            <img src={about} alt="" className="w-100" />
          </div>
        </div>
      </div>

      <div className="container-fluid two">
        <div className="row d-flex">
          <div className="col-md-6">
            <img src={feature} alt="" className="w-100" />
          </div>
          <div className="col-md-4 mx-4 my-4">
            <h3 className="about">Our Feature</h3>
            <h2 className="fw-bold w-75">
              We Provider Soulation to grow your bussines
            </h2>
            <p className="fw-light w-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              odio accusantium rem ullam, minus et animi itaque? Quasi,
              doloremque at.
            </p>
            <p className="fw-light w-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              odio accusantium rem ullam, minus et animi itaque? Quasi,
              doloremque at.
            </p>
            <button className="btn btn-success">
              Exploer More <FaArrowRightLong />{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
