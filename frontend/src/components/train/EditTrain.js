import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditTrain() {
  const { id } = useParams();
  const [train, setTrain] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/train/getOne/${id}`)
      .then((res) => {
        console.log(res);
        setTrain(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [name, setName] = useState(train.name);
  const [description, setDescription] = useState(train.description);
  const [startStation, setStartStation] = useState(train.startStation);
  const [endStation, setEndStation] = useState(train.endStation);
  const [startTime, setStartTime] = useState(train.startTime);
  const [endTime, setEndTime] = useState(train.endTime);

  function updateTrain(event) {
    event.preventDefault();

    const updated = {
      name,
      description,
      startStation,
      endStation,
      startTime,
      endTime,
    };

    axios
      .put(`http://localhost:8000/train/updateTrain/${id}`, updated)
      .then((res) => {
        window.alert("Train Updated !");
        navigate("/allTrains");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div style={{ marginLeft: "30%", marginTop: "20px" }}>
      <br></br>
      <h3>Edit {train.name} </h3>
      <br></br>
      <div>
        <div className="row md-6">
          <div className="col-md-6">
            <label className="labels" style={{ float: "left" }}>
              Train Name :
            </label>
            <input
              type="text"
              className="form-control"
              required
              defaultValue={train.name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="row md-6">
          <div className="col-md-6">
            <label className="labels" style={{ float: "left" }}>
              Description
            </label>
            <textarea
              type="text"
              className="form-control"
              required
              defaultValue={train.description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="row md-6">
        <div className="col-md-3">
          <label className="labels" style={{ float: "left" }}>
            Start Station
          </label>
          <input
            type="text"
            className="form-control"
            required
            defaultValue={train.startStation}
            onChange={(event) => {
              setStartStation(event.target.value);
            }}
          />
        </div>
        <div className="col-md-3">
          <label className="labels" style={{ float: "left" }}>
            End Station
          </label>
          <input
            type="text"
            className="form-control"
            required
            defaultValue={train.endStation}
            onChange={(event) => {
              setEndStation(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="row md-6">
        <div className="col-md-3">
          <label className="labels" style={{ float: "left" }}>
            Start Time
          </label>
          <input
            type="text"
            className="form-control"
            required
            defaultValue={train.startTime}
            onChange={(event) => {
              setStartTime(event.target.value);
            }}
          />
        </div>
        <div className="col-md-3">
          <label className="labels" style={{ float: "left" }}>
            End Time
          </label>
          <input
            type="text"
            className="form-control"
            required
            defaultValue={train.endTime}
            onChange={(event) => {
              setEndTime(event.target.value);
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
        <button className="btn btn-warning" type="button" onClick={updateTrain}>
          Update Train
        </button>
      </div>
    </div>
  );
}
