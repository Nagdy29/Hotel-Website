import React from "react";
import title from "../Images/image-heading.jpg";
import { Link } from "react-router-dom";
import b1 from "../Images/singlepage/blog-1.jpg";
import b2 from "../Images/singlepage/blog-2.jpg";
import b3 from "../Images/singlepage/blog-3.jpg";
import b4 from "../Images/singlepage/blog-4.jpg";
import b5 from "../Images/singlepage/blog-5.jpg";
import b6 from "../Images/singlepage/blog-6.jpg";
export const Blog = () => {
  return (
    <>
      <div>
        <div class="card text-bg-dark">
          <img src={title} class="card-img  " alt="..." />
          <div class="card-img-overlay d-flex align-items-center justify-content-between">
            <h5 class="card-title display-6 text-white">BLOG</h5>
            <div className="mx-5">
              <button className="btn">
                <Link className="text-decoration-none text-info " to="/">
                  HOME/{" "}
                </Link>
              </button>
              <button className="btn">
                <Link className="text-decoration-none text-white " to="/blog">
                  BLOG{" "}
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="container row mx-5 my-4">
          <div className="col-md-4 my-2">
            <div class="card d-flex align-items-center blog-card">
              <div className="d-flex justify-content-center">
                <img src={b1} class="card-img-top my-1 blog-img " alt="..." />
              </div>
              <div className="d-flex align-items-center gap-5 p-1">
                <p className="fw-medium mx-5">Jun 03,2023</p>
                <button className="btn btn-success mx-5">Business</button>
              </div>
              <div className="mx-2">
                <h3 className="fw-bolder h6">The Most Advance Business Plan</h3>
                <p className="fw-normal h6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Animi, eveniet!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2 blog">
            <div class="card d-flex align-items-center blog-card">
              <div className="d-flex justify-content-center">
                <img src={b2} class="card-img-top my-1 blog-img " alt="..." />
              </div>
              <div className="d-flex align-items-center gap-5 p-1">
                <p className="fw-medium mx-5">Jun 03,2023</p>
                <button className="btn btn-success mx-5">Business</button>
              </div>
              <div className="mx-2">
                <h3 className="fw-bolder h6">The Most Advance Business Plan</h3>
                <p className="fw-normal h6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Animi, eveniet!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2 blog">
            <div class="card d-flex align-items-center blog-card">
              <div className="d-flex justify-content-center">
                <img src={b3} class="card-img-top my-1 blog-img " alt="..." />
              </div>
              <div className="d-flex align-items-center gap-5 p-1">
                <p className="fw-medium mx-5">Jun 03,2023</p>
                <button className="btn btn-success mx-5">Business</button>
              </div>
              <div className="mx-2">
                <h3 className="fw-bolder h6">The Most Advance Business Plan</h3>
                <p className="fw-normal h6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Animi, eveniet!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2 blog">
            <div class="card d-flex align-items-center blog-card">
              <div className="d-flex justify-content-center">
                <img src={b4} class="card-img-top my-1 blog-img " alt="..." />
              </div>
              <div className="d-flex align-items-center gap-5 p-1">
                <p className="fw-medium mx-5">Jun 03,2023</p>
                <button className="btn btn-success mx-5">Business</button>
              </div>
              <div className="mx-2">
                <h3 className="fw-bolder h6">The Most Advance Business Plan</h3>
                <p className="fw-normal h6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Animi, eveniet!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2 blog">
            <div class="card d-flex align-items-center blog-card">
              <div className="d-flex justify-content-center">
                <img src={b5} class="card-img-top my-1 blog-img " alt="..." />
              </div>
              <div className="d-flex align-items-center gap-5 p-1">
                <p className="fw-medium mx-3">Jun 03,2023</p>
                <button className="btn btn-success mx-3">Development</button>
              </div>
              <div className="mx-2">
                <h3 className="fw-bolder h6">The Most Advance Business Plan</h3>
                <p className="fw-normal h6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Animi, eveniet!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2 blog">
            <div class="card d-flex align-items-center blog-card">
              <div className="d-flex justify-content-center">
                <img src={b6} class="card-img-top my-1 blog-img " alt="..." />
              </div>
              <div className="d-flex align-items-center gap-5 p-1">
                <p className="fw-medium mx-5">Jun 03,2023</p>
                <button className="btn btn-success mx-5">Traviling</button>
              </div>
              <div className="mx-2">
                <h3 className="fw-bolder h6">The Most Advance Business Plan</h3>
                <p className="fw-normal h6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Animi, eveniet!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
