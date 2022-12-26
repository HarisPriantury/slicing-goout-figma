import React from "react";
import jumbotronImage from "../Images/Rectangle 4.png";
import icon from "../Images/Frame 13.png";
import union from "../Images/Frame 1312.png";
import line from "../Images/Line 6.png";
import date from "../Images/Frame 1323.png";
import seat from "../Images/Frame 1327.png";
import searchIcon from "../Images/Frame 1321.png";

const Jumbotron = () => {
  return (
    <>
      <div className="row mt-3 jumbotron">
        <div className="jumbotron-content col-md-6 row">
          <div className="content1">
            <h1 className="">
              Find The Best Place <br /> to Stress Release
            </h1>
            <p className="text">A new way to travel by air the easy and fast way. </p>
            <p className="text">try it now by filling out the form below!</p>
          </div>
          <div className="content2">
            <div className="search row d-flex align-items-center">
              <div className="col-md-3">
                <div className="d-flex flex-row flex-wrap justify-content-around align-items-center">
                  <div className="icon">
                    <img src={icon} alt="" />
                  </div>
                  <div className="detail">
                    <h2>NTB, Lombok</h2>
                    <p>Select the Locations</p>
                  </div>
                  <div className="">
                    <img src={union} alt="" />
                  </div>
                  <div className="">
                    <img src={line} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="d-flex flex-row flex-wrap justify-content-around align-items-center">
                  <div className="icon">
                    <img src={date} alt="" />
                  </div>
                  <div className="detail">
                    <h2>9 Juni 2022</h2>
                    <p>Choose Flight Data</p>
                  </div>
                  <div className="">
                    <img src={union} alt="" />
                  </div>
                  <div className="">
                    <img src={line} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="d-flex flex-row flex-wrap justify-content-around align-items-center">
                  <div className="icon">
                    <img src={seat} alt="" />
                  </div>
                  <div className="detail">
                    <h2>Economy</h2>
                    <p>Choose Flight Type</p>
                  </div>
                  <div className="">
                    <img src={union} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <button className="searchButton">
                  <img src={searchIcon} alt="" />
                  <h4>Search Flight</h4>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 jumbotron-image">
          <img className="imageJumbotron " src={jumbotronImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
