import React, { useContext, useState } from "react";
import Navbar from "../NavBar/navbar";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import "./reserve.css";
import Swal from 'sweetalert2'

export default function Reserve() {
  const location = useLocation();
  const navigate = useNavigate();

  const id = location.pathname.split("/")[2];

  const [selectedRooms, setSelectedRooms] = useState([]);
  const { dates } = useContext(SearchContext);

  //const getDatesInRange = (start)

  //console.log(id)

  const { data, loading, error } = useFetch(
    `http://localhost:8000/api/hotel/room/${id}`
  );

  //console.log(data);

  const handleSelect = (e) => {
    const checked = e.target.checked;

    const value = e.target.value;

    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item != value)
    );
  };

  //console.log(selectedRooms)

  const handleClick = () => {
    Swal.fire({
      title: 'Room Reservation Successful!',
      text: 'Enjoy your vacation time',
      imageUrl: 'https://cf.bstatic.com/static/img/communities/cover-photo/300x300/israel/8bbf21ad93d65e5a591016e6854698c11adbed15.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })

    navigate('/');
  };

  return (
    <div>
      <Navbar />

      <div className="reserve">
        <div className="rContainer">
          <span>Select your Rooms </span>
          {data.map((item) => (
            <div className="rItem">
              <div className="rItemInfo">
                <div className="rTitle">{item.title}</div>
                <div className="rDesc">{item.desc}</div>
                <div className="rMaxPeople">
                  Max People : <b>{item.maxPeople}</b>
                </div>
                <div className="rPrice">
                  Price : <b>Rs.{item.price}.00 </b>
                </div>
              </div>
              <div className="rSelectRooms">
                {item.roomNumbers.map((roomNumber) => (
                  <div className="room">
                    <label>{roomNumber.number}</label>
                    <input
                      type="checkbox"
                      value={roomNumber._id}
                      onChange={handleSelect}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button onClick={handleClick} className="rButton">
            Reserve Now !!
          </button>
        </div>
      </div>
    </div>
  );
}
