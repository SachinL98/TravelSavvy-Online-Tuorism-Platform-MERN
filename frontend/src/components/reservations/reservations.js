import React, { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import useFetch from "../../hooks/useFetch";
import "./reservation.css";
import axios from "axios";

export default function Reservations() {
  const { user } = useAuthContext();

  const [reservation, setReservation] = useState("");
  const [active, setActive] = useState(false);

  const { data, loading, error } = useFetch(
    `http://localhost:8000/api/hotel/userId/${user.user._id}`
  );

  const GetReservations = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/hotel/getReservation/${id}`
      );
      setReservation(response.data);
      setActive(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(reservation);

  return (
    <div className="res">
      <>
        <h3 style={{ color: "#003580" }}>Hotel List</h3>
        <br />
        {data.map((hotels) => (
          <button
            className="res-btn"
            onClick={() => {
              GetReservations(hotels._id);
            }}
          >
            {hotels.name}
          </button>
        ))}
      </>
      <br />
      <br />

      {active && (
        <div className="reservations">
          <h4 style={{ color: "#003580" }}>Current Reservations</h4>
          <br />

          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Guest Name</th>
                <th scope="col">Guest Email</th>
                <th scope="col">Guest Mobile Number</th>
                <th scope="col">Check In Date</th>
                <th scope="col">Check Out Date</th>
              </tr>
            </thead>
            <tbody>
              {reservation &&
                reservation.map((item) => (
                  <>
                    <tr>
                      <td>{item.userFname}</td>
                      <td>{item.userEmail}</td>
                      <td>{item.userMobile}</td>
                      <td>{item.startDate}</td>
                      <td>{item.endDate}</td>
                    </tr>
                  </>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
