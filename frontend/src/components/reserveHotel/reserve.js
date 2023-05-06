import React, { useContext, useState } from "react";
import Navbar from "../NavBar/navbar";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import "./reserve.css";

export default function Reserve() {
  const location = useLocation();

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

  const handleClick = () => {};

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
