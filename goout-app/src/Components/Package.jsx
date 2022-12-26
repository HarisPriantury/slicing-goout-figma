import React from "react";
import imagePackage from "../Images/Rectangle 304.png";
import imagePackage2 from "../Images/Group 1322.png";

export default function Package() {
  return (
    <>
      <div className="row package-container">
        <div className="col-md-3">
          <div className="image-wrapper d-flex justify-content-center align-items-center">
            <img className="active-package" src={imagePackage} alt="" />
          </div>
        </div>
        <div className="col-md-3">
          <img src={imagePackage2} alt="" />
        </div>
        <div className="col-md-6 package">
          <p className="text-primary fw-bold">Our Package</p>
          <h2>Popular Trip Package</h2>
          <p className="package-desc">
            A new way to travel by air the easy and fast way. <br /> Try it now by filling out the form below!
          </p>
          <div className="row package">
            <div className="col-md-3">
              <h3>120+</h3>
              <p>Destination</p>
            </div>
            <div className="col-md-3">
              <h3>560+</h3>
              <p>Luxury Hotel</p>
            </div>
            <div className="col-md-5">
              <h3>135K+</h3>
              <p>Happy Tourist</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <button className="btn btn-primary choose-package">Choose Package</button>
            </div>
            <div className="col-md-6 view-more">
              <a href="">View More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
