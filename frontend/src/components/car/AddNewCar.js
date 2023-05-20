import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../navbar";
// import { useAuthContext } from "../../hooks/useAuthContext";

export default function AddNewCar() {
  const navigate = useNavigate();
  //   const { user } = useAuthContext();
  //console.log(user);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  const [isFavorite, setIsFavorite] = useState("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [seats, setSeats] = useState("");
  const [transition, setTransition] = useState("");
  const [fuel, setFuel] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");

  //   const handleDropdown = (event) => {
  //     setType(event.target.value);
  //   };

  function sendCarData(event) {
    event.preventDefault();

    const newCar = {
      name,
      type,
      image,
      isFavorite,
      price,
      oldPrice,
      seats,
      transition,
      fuel,
      image1,
      image2,
      image3,
    };

    axios
      .post("http://localhost:8000/car/addCar/", newCar)
      .then((res) => {
        window.alert("New Car Is Added !");
        navigate("/carHome");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <NavigationBar />
      <form style={{ marginLeft: "30%", marginTop: "20px" }}>
        <br />
        <div className="row md-6">
          <div className="col-md-6">
            <label className="labels" style={{ float: "left" }}>
              Enter Image URL :
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(event) => {
                setImage(event.target.value);
              }}
            />
          </div>
        </div>
        <br />
        <div className="row md-6">
          <div className="col-md-6">
            <label className="labels" style={{ float: "left" }}>
              Enter Car Name :
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="row md-6">
          <div className="col-md-6">
            <label className="labels" style={{ float: "left" }}>
              Enter Type :
            </label>
            <textarea
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setType(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="row md-6">
          <div className="col-md-3">
            <label className="labels" style={{ float: "left" }}>
              Enter isFavorite :
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setIsFavorite(event.target.value);
              }}
            />
          </div>
          <div className="col-md-3">
            <label className="labels" style={{ float: "left" }}>
              Enter Price :
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="row md-6">
          <div className="col-md-3">
            <label className="labels" style={{ float: "left" }}>
              Enter Old Price :
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setOldPrice(event.target.value);
              }}
            />
          </div>
          <div className="col-md-3">
            <label className="labels" style={{ float: "left" }}>
              Enter Seat Count :
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setSeats(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="row md-6">
          <div className="col-md-3">
            <label className="labels" style={{ float: "left" }}>
              Enter Transition :
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setTransition(event.target.value);
              }}
            />
          </div>
          <div className="col-md-3">
            <label className="labels" style={{ float: "left" }}>
              Enter Fuel Capacity :
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setFuel(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="row md-6">
          <div className="col-md-6">
            <label className="labels" style={{ float: "left" }}>
              Enter Detail Image 1 :
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setImage1(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="row md-6">
          <div className="col-md-6">
            <label className="labels" style={{ float: "left" }}>
              Enter Detail Image 2 :
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setImage2(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="row md-6">
          <div className="col-md-6">
            <label className="labels" style={{ float: "left" }}>
              Enter Detail Image 3 :
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setImage3(event.target.value);
              }}
            />
          </div>
        </div>

        <div
          className="row md-6"
          style={{ marginTop: "10px", marginLeft: "1px" }}
        >
          <button
            style={{ width: "80px" }}
            className="btn btn-success"
            type="button"
            onClick={sendCarData}
          >
            Add Car
          </button>
        </div>
      </form>
    </div>
  );
}
