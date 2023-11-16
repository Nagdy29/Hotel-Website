import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineStarRate } from "react-icons/md";
import React from "react";
import ho1 from "../Images/popular2.jpg";
import ho2 from "../Images/popular3.jpg";
import ho3 from "../Images/popular4.jpg";
import ho4 from "../Images/popular5.jpg";

export const MostHotel = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-center flex-column ">
          <h1 className="text-center">Most Hotels</h1>
          <div class="star"></div>
        </div>
        <div className="d-flex ms-1  align-items-center justify-content-center row">
          <div className="col-md-3">
            <div class="card w-25"></div>

            <img src={ho1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title d-flex align-items-center p-2 gap-1">
                <FaMapLocationDot size={25} />
                vietnam
              </h5>
              <p class="card-text"></p>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <div className="my-2">
                  <MdOutlineStarRate size={25} />
                  <MdOutlineStarRate size={25} />
                  <MdOutlineStarRate size={25} />
                  <MdOutlineStarRate size={25} />
                </div>
                <p>Fawlty Tower</p>
                <div>
                  <span className="text-danger">$200.00</span>/perNight
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card w-25"></div>

            <img src={ho2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title d-flex align-items-center p-2 gap-1">
                <FaMapLocationDot size={25} />
                vietnam
              </h5>
              <p class="card-text"></p>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <div className="my-2">
                  <MdOutlineStarRate size={25} />
                  <MdOutlineStarRate size={25} />
                  <MdOutlineStarRate size={25} />
                  <MdOutlineStarRate size={25} />
                </div>
                <p>Fawlty Tower</p>
                <div>
                  <span className="text-danger">$200.00</span>/perNight
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card w-25"></div>

            <img src={ho3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title d-flex align-items-center p-2 gap-1">
                <FaMapLocationDot size={25} />
                vietnam
              </h5>
              <p class="card-text"></p>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <div className="my-2">
                  <MdOutlineStarRate size={25} />
                  <MdOutlineStarRate size={25} />
                  <MdOutlineStarRate size={25} />
                  <MdOutlineStarRate size={25} />
                </div>
                <p>Fawlty Tower</p>
                <div>
                  <span className="text-danger">$200.00</span>/perNight
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card w-25"></div>

            <img src={ho4} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title d-flex align-items-center p-2 gap-1">
                <FaMapLocationDot size={25} />
                vietnam
              </h5>
              <p class="card-text"></p>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <div className="my-2">
                  <MdOutlineStarRate size={25} />
                  <MdOutlineStarRate size={25} />
                  <MdOutlineStarRate size={25} />
                  <MdOutlineStarRate size={25} />
                </div>
                <p>Fawlty Tower</p>
                <div>
                  <span className="text-danger">$200.00</span>/perNight
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
