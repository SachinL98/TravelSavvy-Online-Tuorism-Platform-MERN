import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar/navbar";
import "./addProperty.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

export default function AddProperty() {
  const [hotelName, setHotelName] = useState("");
  const [city, setcity] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [distance, setdistance] = useState("");
  const [desc, setDesc] = useState("");
  const [cheapest, setCheapest] = useState("");
  //const { signup, error, isLoading } = useSignup();
  const [hoteltype, setHoteType] = useState("");
  const type = "user";

  const handleDropdown = (event) => {
    setHoteType(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(hotelName, city, title, address, distance, desc, cheapest);
    //await addListing(hotelName, city, title, address, distance, desc, cheapest);
  };

  return (
    <div>
      <Navbar />
      <form className="addP" onSubmit={handleSubmit} action="">
        <div className="addPTitles">
          <center>
            <h2 style={{color:"#003580"}}>Add Property List</h2>
          </center>
          <br />
          <br />
          <h4 style={{color:"#003580"}}>
            Tell us about your place Share some basic info, like where it is and
            how many guests can stay , it's address and many more .
          </h4>
        </div>

        <div className="container">
          <div className="leftSide">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name=""
              onChange={(e) => setHotelName(e.target.value)}
              value={hotelName}
              placeholder="eg : Example Hotel"
            />
            <label htmlFor="">city</label>
            <input
              type="text"
              name=""
              onChange={(e) => setcity(e.target.value)}
              value={city}
              placeholder="eg : Galle"
            />

            <label htmlFor="">Title</label>
            <input
              type="text"
              name=""
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="eg : Best Hotel in area"
            />

            <label htmlFor="">Select Type </label>
            <select
              value={hoteltype}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                marginTop: "9px",
              }}
              onChange={handleDropdown}
            >
              <option value="">
                Which of these best describes your place?
              </option>
              <option value="Hotel">Hotel</option>
              <option value="Villa">Villa</option>
              <option value="Apartment">Apartment</option>
              <option value="Resort">Resort</option>
            </select>
          </div>
          <div className="leftSide">
            <label htmlFor="">Address</label>
            <input
              type="text"
              name=""
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              placeholder="eg : Example Hotel , Galle Rode , Galle"
            />
            <label htmlFor="">Distance</label>
            <input
              type="text"
              name=""
              onChange={(e) => setdistance(e.target.value)}
              value={distance}
              placeholder="eg : 500m from Beach"
            />
            <label htmlFor="">Description</label>
            <input
              type="text"
              name=""
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              placeholder="Small Description about your place "
            />
            <label htmlFor="">Cheapest Price</label>
            <input
              type="text"
              name=""
              onChange={(e) => setCheapest(e.target.value)}
              value={cheapest}
              placeholder="eg : Rs 1000.00"
            />
          </div>
        </div>
        <div className="images">
          <label>
            <input type="file" style={{ display: "none" }} name="" id="" />
            <FontAwesomeIcon icon={faUpload} /> Upload Image
          </label>
        </div>
        <center>
          <button className="addBtn">Add Listing</button>
        </center>
      </form>
    </div>
  );
}
