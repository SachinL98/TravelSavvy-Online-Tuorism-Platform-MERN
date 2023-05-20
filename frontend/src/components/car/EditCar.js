import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavigationBar from "../navbar";

export default function EditTrain() {
  const { id } = useParams();
  const [car, setCar] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/car/getOneCar/${id}`)
      .then((res) => {
        console.log(res);
        setCar(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [name, setName] = useState(car.name);
  const [type, setType] = useState(car.type);
  const [image, setImage] = useState(car.image);
  const [isFavorite, setIsFavorite] = useState(car.isFavorite);
  const [price, setPrice] = useState(car.price);
  const [oldPrice, setOldPrice] = useState(car.oldPrice);
  const [seats, setSeats] = useState(car.seats);
  const [transition, setTransition] = useState(car.transition);
  const [fuel, setFuel] = useState(car.fuel);
  const [image1, setImage1] = useState(car.image1);
  const [image2, setImage2] = useState(car.image2);
  const [image3, setImage3] = useState(car.image3);

  function updateCar(event) {
    event.preventDefault();

    const updated = {
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
      .put(`http://localhost:8000/car/updateCar/${id}`, updated)
      .then((res) => {
        window.alert("Car Updated !");
        navigate("/carHome");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      {/* <NavigationBar/> */}
      <div style={{ marginLeft: "30%", marginTop: "20px" }}>
        <br></br>
        <h3>Edit {car.name} </h3>
        <br></br>
        <div>
          <div className="row md-6">
            <div className="col-md-6">
              <label className="labels" style={{ float: "left" }}>
                Car Name :
              </label>
              <input
                type="text"
                className="form-control"
                required
                defaultValue={car.name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="row md-6">
            <div className="col-md-6">
              <label className="labels" style={{ float: "left" }}>
                Type
              </label>
              <textarea
                type="text"
                className="form-control"
                required
                defaultValue={car.type}
                onChange={(event) => {
                  setType(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="row md-6">
          <div className="col-md-3">
            <label className="labels" style={{ float: "left" }}>
              Image
            </label>
            <input
              type="text"
              className="form-control"
              required
              defaultValue={car.image}
              onChange={(event) => {
                setImage(event.target.value);
              }}
            />
          </div>
          <div className="col-md-3">
            <label className="labels" style={{ float: "left" }}>
              Is Favorite
            </label>
            <input
              type="text"
              className="form-control"
              required
              defaultValue={car.isFavorite}
              onChange={(event) => {
                setIsFavorite(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="row md-6">
          <div className="col-md-3">
            <label className="labels" style={{ float: "left" }}>
              Price
            </label>
            <input
              type="text"
              className="form-control"
              required
              defaultValue={car.price}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </div>
          <div className="col-md-3">
            <label className="labels" style={{ float: "left" }}>
              Old Price
            </label>
            <input
              type="text"
              className="form-control"
              required
              defaultValue={car.oldPrice}
              onChange={(event) => {
                setOldPrice(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="row md-6">
          <div className="col-md-3">
            <label className="labels" style={{ float: "left" }}>
              Seats
            </label>
            <input
              type="text"
              className="form-control"
              required
              defaultValue={car.seats}
              onChange={(event) => {
                setSeats(event.target.value);
              }}
            />
          </div>
          <div className="col-md-3">
            <label className="labels" style={{ float: "left" }}>
              Transition
            </label>
            <input
              type="text"
              className="form-control"
              required
              defaultValue={car.transition}
              onChange={(event) => {
                setTransition(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="row md-6">
          <div className="col-md-6">
            <label className="labels" style={{ float: "left" }}>
              Fuel :
            </label>
            <input
              type="text"
              className="form-control"
              required
              defaultValue={car.fuel}
              onChange={(event) => {
                setFuel(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="row md-6">
          <div className="col-md-6">
            <label className="labels" style={{ float: "left" }}>
              Car Image 1 :
            </label>
            <input
              type="text"
              className="form-control"
              required
              defaultValue={car.image1}
              onChange={(event) => {
                setImage1(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="row md-6">
          <div className="col-md-6">
            <label className="labels" style={{ float: "left" }}>
              Car Image 2 :
            </label>
            <input
              type="text"
              className="form-control"
              required
              defaultValue={car.image2}
              onChange={(event) => {
                setImage2(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="row md-6">
          <div className="col-md-6">
            <label className="labels" style={{ float: "left" }}>
              Car Image 3 :
            </label>
            <input
              type="text"
              className="form-control"
              required
              defaultValue={car.image3}
              onChange={(event) => {
                setImage3(event.target.value);
              }}
            />
          </div>
        </div>
        {/* <div className="row md-6">
        <div className="col-md-3">
          <label className="labels" style={{ float: "left" }}>
            Manufactured Date
          </label>
          <input
            type="date"
            className="form-control"
            required
            defaultValue={new Date(cream.mfd).toLocaleDateString()}
            onChange={(event) => {
              setMfd(event.target.value);
            }}
          />
        </div>
        <div className="col-md-3">
          <label className="labels" style={{ float: "left" }}>
            Expiry Date
          </label>
          <input
            type="date"
            className="form-control"
            required
            defaultValue={new Date(cream.exp).toLocaleDateString()}
            onChange={(event) => {
              setExp(event.target.value);
            }}
          />
        </div>
      </div> */}
        <div
          className="row md-6"
          style={{ marginLeft: "1px", marginTop: "10px" }}
        >
          <button className="btn btn-warning" type="button" onClick={updateCar}>
            Update Car
          </button>
        </div>
      </div>
    </>
  );
}
