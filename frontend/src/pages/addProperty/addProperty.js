import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/NavBar/navbar";
import "./addProperty.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../../hooks/useAuthContext";
import Swal from 'sweetalert2'

export default function AddProperty() {
  const [name, setHotelName] = useState("");
  const [city, setcity] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [distance, setdistance] = useState("");
  const [desc, setDesc] = useState("");
  const [cheapestPrice, setCheapest] = useState("");
  const [type, setHoteType] = useState("");
  const [images, setSelectedImages] = useState([]);
  
  const navigate = useNavigate();

  const handleDropdown = (event) => {
    setHoteType(event.target.value);
  };

  const { user } = useAuthContext();
  const userID = user.user._id

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(name, city, title, address, distance, desc, cheapestPrice,images,userID);

    if((name == null || name == "") || (city == null || city == "") || (title == null|| title == "") || (address == null || address == "") ||  (desc == null|| desc == "") || (cheapestPrice == null||cheapestPrice == "") || (images == null || images == "")){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Fill All Feilds',
      })

      return
    }else{
      await addListing(name,type ,city, title, address, distance, desc, cheapestPrice,images,userID);
    }

    
  };

  const onSelectImage = (event) => {
    const selectedImages = event.target.files;
    const selectedImageArray = Array.from(selectedImages);
    const imagesArray = selectedImageArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages(imagesArray);
  };

  const addListing = async (name,type,city, title, address, distance, desc, cheapestPrice,images,userID)=>{
    const response = await fetch('http://localhost:8000/api/hotel',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({name,type ,city, title, address, distance, desc, cheapestPrice,images,userID})
        })

        console.log(response.status)

        if(response.status == 200){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })

          navigate('/property');
        }
  }

  return (
    <div>
      <Navbar />
      <form className="addP" onSubmit={handleSubmit} action="">
        <div className="addPTitles">
          <center>
            <h2 style={{ color: "#003580" }}>Add Property List</h2>
          </center>
          <br />
          <br />
          <h4 style={{ color: "#003580" }}>
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
              value={name}
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
              value={type}
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
              value={cheapestPrice}
              placeholder="eg : Rs 10000.00"
            />
          </div>
        </div>
        <div className="images">
          
        {images &&
          images.map((image, index) => {
            return (
              <div key={image} className="image">
                <img src={image} height="120" width="200" alt="upload" />
              
              </div>
            );
          })}

          <label>
            <input
              type="file"
              style={{ display: "none" }}
              name="images"
              id=""
              onChange={onSelectImage}
              multiple
              accept="image/png , image/jpeg , image/webp"
            />
            <FontAwesomeIcon icon={faUpload} /> Upload Images
          </label>
        </div>
        <center>
          <button className="addBtn">Add Listing</button>
        </center>
      </form>
    </div>
  );
}
