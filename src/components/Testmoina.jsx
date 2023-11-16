import React from "react";
import title from "../Images/image-heading.jpg";
import { Link } from "react-router-dom";
import t1 from "../Images/profile/profile1.jpg";
import t2 from "../Images/profile/profile2.jpg";
import t3 from "../Images/profile/profile3.jpg";
import t4 from "../Images/profile/profile4.jpg";
import t5 from "../Images/profile/profile5.jpg";
import t6 from "../Images/profile/profile6.jpg";
export const Testmoina = () => {
  return (
    <>
      <div class="card text-bg-dark">
        <img src={title} class="card-img  " alt="..." />
        <div class="card-img-overlay d-flex align-items-center justify-content-between">
          <h5 class="card-title display-6 text-white">TEST</h5>
          <div className="mx-5">
            <button className="btn">
              <Link className="text-decoration-none text-info " to="/">
                HOME/{" "}
              </Link>
            </button>
            <button className="btn">
              <Link className="text-decoration-none text-white " to="/test">
                TEST{" "}
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="container row">
        <div className="col-md-6">
          <div class="card mb-3 my-5 w-100 mx-2">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={t1}
                  class="img-fluid rounded-start w-75 h-100"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card Testx</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div class="card mb-3 my-5 w-100 mx-2">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={t2}
                  class="img-fluid rounded-start w-75 h-100"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card Testx</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      Last updated 35 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div class="card mb-3 my-5 w-100 mx-2">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={t3}
                  class="img-fluid rounded-start w-75 h-100"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card Testx</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      Last updated 5 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div class="card mb-3 my-5 w-100 mx-2">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={t4}
                  class="img-fluid rounded-start w-75 h-100"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card Testx</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div class="card mb-3 my-5 w-100 mx-2">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={t5}
                  class="img-fluid rounded-start w-75 h-100"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card Testx</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      Last updated 5 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div class="card mb-3 my-5 w-100 mx-2">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={t6}
                  class="img-fluid rounded-start w-75 h-100"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card Testx</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      Last updated 8 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
