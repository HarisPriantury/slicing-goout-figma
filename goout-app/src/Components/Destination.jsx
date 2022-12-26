import React from "react";
import destinationImage from "../Images/Mask group.png";
import rating from "../Images/Frame 1340.png";

export default function Destination() {
  const destinationItem = [
    {
      title: "Waterfall Haven",
      place: "Selajan, Iceland",
      price: "$9",
    },
    {
      title: "Greates Mountain",
      place: " ",
      price: "$12",
    },
    {
      title: "Coconut Tree River",
      place: "Lombok, Indonesia",
      price: "$6",
    },
    {
      title: "Circle Beach Play",
      place: "Lombok, Indonesia",
      price: "$5",
    },
    {
      title: "High Ground",
      place: "Bali, Indonesia",
      price: "$49",
    },
    {
      title: "Dinosaur Land",
      place: "Bali Indonesia",
      price: "$5",
    },
    {
      title: "Turttle Land",
      place: "Bali, indonesia",
      price: "$5",
    },
    {
      title: "The Cliffside Beach",
      place: "Bali, Indonesia",
      price: "$5",
    },
  ];
  return (
    <>
      <div className="destination-wrapper">
        <div className="row title-destination">
          <h1 className="text-center">Explore Natural Destination</h1>
          <p className="text-center">
            A new way to travel by air the easy and fast way. <br />
            Try it now by filling out the form below!
          </p>
        </div>
        <div className="row destination-picture">
          {destinationItem.map((item) => {
            return (
              <div className="col-md-3 destination-item">
                <div className="row img-item-wrapper">
                  <img className="img-item" src={destinationImage} alt="" />
                  <div className="rating">
                    <img src={rating} alt="" />
                  </div>
                </div>
                <div className="row destination-desc">
                  <h4>{item.title}</h4>
                  <p className="place">{item.place}</p>
                  <div className="row destination-price">
                    <div className="col-md-8">
                      <p>
                        {item.price}
                        <span>/person</span>
                      </p>
                    </div>
                    <div className="col-md-4">
                      <button className="btn btn-primary book-button">Book</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row view-more-button">
          <button className="btn btn-secondary more-btn">View More</button>
        </div>
      </div>
    </>
  );
}
