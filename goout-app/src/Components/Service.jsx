import React from "react";
import icon from "../Images/Group 1347.png";
import icon2 from "../Images/Group 1339.png";
import icon3 from "../Images/Frame 1345.png";
import icon4 from "../Images/Frame 1345(1).png";
export default function () {
  const itemDesc = [
    {
      title: "Calculated Weather",
      img: "https://www.figma.com/file/EleWtDHZH6qmcRPEgvSFih/Goout%2B-%2BTravel%2BLanding%2BPage?node-id=1%3A330&t=I6q3P1cuE2mmq1E1-4",
    },
    {
      title: "Best Experience Flight",
      img: { icon2 },
    },
    {
      title: "Best Place to Stay",
      img: { icon3 },
    },
    {
      title: "Easy-To-Use",
      img: { icon4 },
    },
  ];
  return (
    <>
      <div className="row" id="service">
        <div className="col-md-4">
          <div className="service-wrapper">
            <p>Our Service</p>
            <h2>
              We Offer <br /> Best Surface
            </h2>
          </div>
        </div>
        <div className="col-md-8 row d-flex align-items-center">
          <div className="col-md-6 service-desc">
            <div className="row">
              <div className="col-md-3">
                <img src={icon} alt="" />
              </div>
              <div className="col-md-9">
                <h4>Calculated Weather</h4>
                <p>A new way to travel by air the easy and fast way.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 service-desc">
            <div className="row">
              <div className="col-md-3">
                <img src={icon2} alt="" />
              </div>
              <div className="col-md-9">
                <h4>Calculated Weather</h4>
                <p>A new way to travel by air the easy and fast way.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 service-desc">
            <div className="row">
              <div className="col-md-3">
                <img src={icon3} alt="" />
              </div>
              <div className="col-md-9">
                <h4>Calculated Weather</h4>
                <p>A new way to travel by air the easy and fast way.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 service-desc">
            <div className="row">
              <div className="col-md-3">
                <img src={icon4} alt="" />
              </div>
              <div className="col-md-9">
                <h4>Calculated Weather</h4>
                <p>A new way to travel by air the easy and fast way.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
