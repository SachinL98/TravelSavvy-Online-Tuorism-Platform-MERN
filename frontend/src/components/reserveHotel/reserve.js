import React, { useContext, useState } from "react";
import Navbar from "../NavBar/navbar";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import "./reserve.css";
import Swal from "sweetalert2";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Reserve() {
  const location = useLocation();
  const navigate = useNavigate();

  const id = location.pathname.split("/")[2];

  const { user } = useAuthContext();

  const userID = user.user._id;
  const userEmail = user.user.email;
  const userFname = user.user.firstname;
  const userMobile = user.user.mobilenumber;

  const { date } = useContext(SearchContext);

  const [selectedRooms, setSelectedRooms] = useState([]);
  const [room, setRoom] = useState("");

  const { data, loading, error } = useFetch(
    `http://localhost:8000/api/hotel/room/${id}`
  );

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item != value)
    );
  };

  const eDate = date[0].endDate;
  const sDate = date[0].startDate;

  const endDate = eDate.toISOString().substring(0, 10);
  const startDate = sDate.toISOString().substring(0, 10);

  const handleClick = () => {
    const response = fetch("http://localhost:8000/api/hotel/saveReservation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        userID,
        userEmail,
        userFname,
        userMobile,
        selectedRooms,
        startDate,
        endDate,
      }),
    });

    console.log(response);

    Swal.fire({
      title: "Room Reservation Successful!",
      text: "Enjoy your vacation time",
      imageUrl:
        "https://cf.bstatic.com/static/img/communities/cover-photo/300x300/israel/8bbf21ad93d65e5a591016e6854698c11adbed15.jpg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
    navigate('/');
  };

  return (
    <div>
      {/* <Navbar /> */}

      <div className="reserve">
        <div className="rContainer">
          <span>Comfirm your  Reservation </span>
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
                      value={item._id}
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
