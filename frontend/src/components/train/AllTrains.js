import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroSection from "./HeroTrain";
import NavigationBar from "../navbar";
// import Header from "../Header";
//import ImageView from "../ImageView";

export default function AllTrains() {
  const [train, setTrain] = useState([]);
  const [deleted, setDeleted] = useState(false);
  //const user = JSON.parse(localStorage.getItem('user'));

  function deleteTrain(id) {
    const ans = window.confirm("Are you sure ?");
    if (ans) {
      axios
        .delete(`http://localhost:8000/train/deleteTrain/${id}`)
        .then((res) => {
          window.alert("Train Deleted !");
          setDeleted(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  //   function addToCart(item) {
  //     const userID = user.user._id;
  //     const productID = item._id;
  //     const productName = item.name;
  //     const price = item.price;
  //     const image = item.imageUrl;
  //     const cartItem = { userID, productID, productName, price, image };

  //     axios
  //       .post("http://localhost:8002/cart/add", cartItem)
  //       .then(() => {
  //         window.alert("Item Added To Cart !");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }

  useEffect(() => {
    function getAllTrains() {
      axios
        .get("http://localhost:8000/train/get")
        .then((res) => {
          setTrain(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getAllTrains();
    setDeleted(false);
  }, [deleted]);

  return (
    <div>
      
      <NavigationBar />
      <h2
        className="display-4 fw-bold mb-4"
        style={{
          textAlign: "left",
          marginLeft: "30px",
          // marginRight: "auto",
          width: "fit-content",
          fontSize: "80px",
          fontWeight: "bold",
          color: "#ad006b"
        }}
      >
        Train Schedules
      </h2>
      <HeroSection />
      <div className="d-flex justify-content-center mt-4 mb-4">
        <Link to="/addNewTrain">
          <button
            className="btn btn-success btn-lg"
            style={{ float: "right", marginRight: "10px" }}
          >
            Add New Train
          </button>
        </Link>
      </div>
      <hr />
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {train.map((trainData) => (
          <div
            className="card"
            style={{
              margin: "20px",
              width: "400px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            }}
            key={trainData._id}
          >
            <div className="card-img-top">
              <img
                src={trainData.imageLink}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                alt="Train"
              />
            </div>
            <div className="card-body">
              <h4
                className="card-title"
                style={{ fontSize: "24px", marginBottom: "10px", fontWeight: 'bold' }}
              >
                {trainData.name}
              </h4>
              <p
                className="card-text"
                style={{ fontSize: "16px", marginBottom: "5px" }}
              >
                {trainData.description}
              </p>
              <p
                className="card-text"
                style={{ fontSize: "16px", marginBottom: "5px" }}
              >
                Start Station :  {trainData.startStation}
              </p>
              <p
                className="card-text"
                style={{ fontSize: "16px", marginBottom: "5px" }}
              >
                End Station :{trainData.endStation}
              </p>
              <p
                className="card-text"
                style={{ fontSize: "16px", marginBottom: "5px" }}
              >
                Start Time :  {trainData.startTime}
              </p>
              <p
                className="card-text"
                style={{ fontSize: "16px", marginBottom: "5px" }}
              >
                End Time :  {trainData.endTime}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Link
                  to={`/oneTrain/${trainData._id}`}
                  className="btn btn-info btn-sm"
                >
                  See Details
                </Link>
                <Link
                  to={`/editTrain/${trainData._id}`}
                  className="btn btn-warning btn-sm"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteTrain(trainData._id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
