import React from "react";
import { Link } from "react-router-dom";
import img from "../Images/logo.png";
import { Ri24HoursFill } from "react-icons/ri";
import { BiSolidPhoneCall, BiLogoGmail } from "react-icons/bi";

export const Navvbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand text-white fs-3" to="/">
            Hotel Website
          </Link>
          <button
            className="navbar-toggler bg-info"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 links">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/destination">
                  Destination
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/test">
                  Testimonail
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="contact">
                  Contact Us
                </Link>
              </li>
              <div className="d-flex align-items-center">
                <div>
                  <ul className="d-flex gap-2 text-decoration-none align-items-center">
                    <li className="text-decoration-none align-items-center justify-content-center">
                      <button className="text-decoration-none btn btn-outline-success ">
                        <Link
                          to="/login"
                          className="text-decoration-none text-white"
                        >
                          {" "}
                          Login
                        </Link>
                      </button>
                    </li>
                    <li>
                      <button className="text-decoration-none btn btn-outline-danger ">
                        <Link
                          to="/register"
                          className="text-decoration-none text-white"
                        >
                          {" "}
                          Register
                        </Link>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>

      <div className="">
        <header className="container-fluid my-4 ">
          <div className="row">
            <div className="col-md-6">
              <img src={img} alt="" />
            </div>
            <div className="col-md-2 my-1">
              <div className="d-flex gap-4">
                <Ri24HoursFill size={30} className="text-danger" />
                <div className="text">
                  <h3 className="">Working Hours</h3>
                  <p className="">monday-sunday : 9.00am to:6.00pm</p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="d-flex gap-4">
                <BiSolidPhoneCall size={30} className="text-danger" />
                <div className="text">
                  <h3 className="">Call Hours</h3>
                  <p className="">monday-sunday : 9.00am to:6.00pm</p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="d-flex gap-4">
                <BiLogoGmail size={30} className="text-danger" />
                <div className="text">
                  <h3 className="">Mail</h3>
                  <p className="">monday-sunday : 9.00am to:6.00pm</p>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
