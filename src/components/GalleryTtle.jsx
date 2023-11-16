import React from "react";
import title from "../Images/image-heading.jpg";
import { Link } from "react-router-dom";

export const GalleryTtle = () => {
  return (
    <>
      <div>
        <div class="card text-bg-dark">
          <img src={title} class="card-img  " alt="..." />
          <div class="card-img-overlay d-flex align-items-center justify-content-between">
            <h5 class="card-title display-6 text-white">GALLERY</h5>
            <div className="mx-5">
              <button className="btn">
                <Link className="text-decoration-none text-info " to="/">
                  HOME/{" "}
                </Link>
              </button>
              <button className="btn">
                <Link
                  className="text-decoration-none text-white "
                  to="/gallery"
                >
                  Gallery{" "}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
