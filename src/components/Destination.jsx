import React from "react";
import title from "../Images/image-heading.jpg";
import { Link } from "react-router-dom";
import des1 from "../Images/dest-1.jpg";
import des2 from "../Images/dest-2.jpg";
import des3 from "../Images/dest-3.jpg";
import des4 from "../Images/dest-4.jpg";
import des5 from "../Images/dest-5.jpg";
import des6 from "../Images/dest-6.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Destination = () => {
  return (
    <>
      <div>
        <div>
          <div class="card text-bg-dark">
            <img src={title} class="card-img " alt="..." />
            <div class="card-img-overlay d-flex align-items-center justify-content-between">
              <h5 class="card-title display-6 text-white">DESTINATION</h5>
              <div className="mx-5">
                <button className="btn">
                  <Link className="text-decoration-none text-info " to="/">
                    HOME/{" "}
                  </Link>
                </button>
                <button className="btn">
                  <Link
                    className="text-decoration-none text-white "
                    to="/destination"
                  >
                    Destination{" "}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container row my-5 mx-5">
          <div className="col-md-4 my-2 ">
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
          <div className="col-md-4 my-2 ">
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
          <div className="col-md-4 my-2 ">
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
          <div className="col-md-4 my-2 ">
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
          <div className="col-md-4 my-2 ">
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
          <div className="col-md-4 my-2 ">
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
      </div>
    </>
  );
};
