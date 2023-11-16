import React from "react";
import slide1 from "../Images/slider-1.jpg";
import slide2 from "../Images/slider-2.jpg";
import slide3 from "../Images/slider-3.jpg";
import about from "../Images/about-img-1.jpg";
import des1 from "../Images/dest-1.jpg";
import des2 from "../Images/dest-2.jpg";
import des3 from "../Images/dest-3.jpg";
import des4 from "../Images/dest-4.jpg";
import des5 from "../Images/dest-5.jpg";
import des6 from "../Images/dest-6.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MostHotel } from "./MostHotel";

export const Hero = () => {
  return (
    <>
      <div className="position-relative">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner sliders">
            <div className="carousel-item active">
              <img src={slide1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={slide2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={slide3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon icons"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden text-black">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon icons"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="forms w-50 p-3 d-block align-items-center justify-content-center position-absolute">
          <form className="w-75">
            <h4 className="text-white">Enjoy Your Holiday</h4>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"></label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Search City"
              />
            </div>
            <div class="mb-3 d-flex gap-2">
              <label for="exampleInputPassword1" class="form-label"></label>
              <input
                type="date"
                class="form-control"
                id="exampleInputPassword1"
              />
              <label for="exampleInputPassword1" class="form-label"></label>
              <input
                type="date"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 d-flex gap-2">
              <label for="exampleInputPassword1" class="form-label"></label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
              />
              <label for="exampleInputPassword1" class="form-label"></label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 d-flex gap-2">
              <label for="exampleInputPassword1" class="form-label"></label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label text-white" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-success w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="container-fluid my-5">
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
      <MostHotel />

      <div className="container row my-5 mx-5 d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center justify-content-center flex-column">
          <h2 className="fw-bold">Most Popular Destination</h2>
          <div class="star"></div>
        </div>
        <div className="col-md-4 my-2 justify-content-center align-items-center ">
          <div class="card">
            <div class="image-container">
              <img
                src={des1}
                class="card-img-top des-imag"
                height={200}
                alt="..."
              />
              <div class="overlay d-flex align-items-center justify-content-center">
                <Link to={`/singlepage}`}>
                  <FaExternalLinkAlt size={25} className="text-white" />
                </Link>
              </div>
            </div>
            <div class="card-body">
              <p class="card-text">loredn</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-2 justify-content-center align-items-center ">
          <div class="card">
            <div class="image-container">
              <img
                src={des2}
                class="card-img-top des-imag"
                height={200}
                alt="..."
              />
              <div class="overlay d-flex align-items-center justify-content-center">
                <Link to={`/singlepage}`}>
                  <FaExternalLinkAlt size={25} className="text-white" />
                </Link>
              </div>
            </div>
            <div class="card-body">
              <p class="card-text">loredn</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-2 justify-content-center align-items-center ">
          <div class="card">
            <div class="image-container">
              <img
                src={des3}
                class="card-img-top des-imag"
                height={200}
                alt="..."
              />
              <div class="overlay d-flex align-items-center justify-content-center">
                <Link to={`/singlepage}`}>
                  <FaExternalLinkAlt size={25} className="text-white" />
                </Link>
              </div>
            </div>
            <div class="card-body">
              <p class="card-text">loredn</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-2 justify-content-center align-items-center ">
          <div class="card">
            <div class="image-container">
              <img
                src={des4}
                class="card-img-top des-imag"
                height={200}
                alt="..."
              />
              <div class="overlay d-flex align-items-center justify-content-center">
                <Link to={`/singlepage}`}>
                  <FaExternalLinkAlt size={25} className="text-white" />
                </Link>
              </div>
            </div>
            <div class="card-body">
              <p class="card-text">loredn</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-2 justify-content-center align-items-center ">
          <div class="card">
            <div class="image-container">
              <img
                src={des5}
                class="card-img-top des-imag"
                height={200}
                alt="..."
              />
              <div class="overlay d-flex align-items-center justify-content-center">
                <Link to={`/singlepage}`}>
                  <FaExternalLinkAlt size={25} className="text-white" />
                </Link>
              </div>
            </div>
            <div class="card-body">
              <p class="card-text">loredn</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-2 justify-content-center align-items-center ">
          <div class="card">
            <div class="image-container">
              <img
                src={des6}
                class="card-img-top des-imag"
                height={200}
                alt="..."
              />
              <div class="overlay d-flex align-items-center justify-content-center">
                <Link to={`/singlepage}`}>
                  <FaExternalLinkAlt size={25} className="text-white" />
                </Link>
              </div>
            </div>
            <div class="card-body">
              <p class="card-text">loredn</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
