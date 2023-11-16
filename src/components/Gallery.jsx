import React from "react";
import { GalleryTtle } from "./GalleryTtle";
import m1 from "../Images/gallery-1.jpg";
import m2 from "../Images/gallery-2.jpg";
import m3 from "../Images/gallery-3.jpg";
import m4 from "../Images/gallery-4.jpg";
import m5 from "../Images/gallery-5.jpg";
import m6 from "../Images/gallery-6.jpg";
export const Gallery = () => {
  return (
    <>
      <GalleryTtle />
      <div className="container-fluid row p-2 my-2">
        <div className="col-md-4 my-2">
          <div class="card d-flex align-items-center w-75">
            <img src={m1} class="card-img-top my-1 images " alt="..." />
            <div class="card-body">
              <p class="card-text fw-medium">Galler1</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-2">
          <div class="card d-flex align-items-center w-75">
            <img src={m2} class="card-img-top my-1 images " alt="..." />
            <div class="card-body">
              <p class="card-text fw-medium">Galler2</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-2">
          <div class="card d-flex align-items-center w-75">
            <img src={m3} class="card-img-top my-1 images " alt="..." />
            <div class="card-body">
              <p class="card-text fw-medium">Galler3</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-2">
          <div class="card d-flex align-items-center w-75">
            <img src={m4} class="card-img-top my-1 images " alt="..." />
            <div class="card-body">
              <p class="card-text fw-medium">Galler4</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-2">
          <div class="card d-flex align-items-center w-75">
            <img src={m5} class="card-img-top my-1 images " alt="..." />
            <div class="card-body">
              <p class="card-text fw-medium">Galler5</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-2">
          <div class="card d-flex align-items-center w-75">
            <img src={m6} class="card-img-top my-1 images " alt="..." />
            <div class="card-body">
              <p class="card-text fw-medium">Galler6</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
