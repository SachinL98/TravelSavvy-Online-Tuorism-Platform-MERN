import axios from "axios";
import React, { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import useFetch from "../../hooks/useFetch";

export default function UserBookings() {
  const { user } = useAuthContext();

  const { data, loading, error } = useFetch(
    `http://localhost:8000/api/hotel/getReservationbyUser/${user.user._id}`
  );

  const hotelID = data.id;
  console.log(data);

  //const { hotel } = useFetch(`http://localhost:8000/api/hotel/find/${hotelID}`);

  return <div>UserBookings</div>;
}
