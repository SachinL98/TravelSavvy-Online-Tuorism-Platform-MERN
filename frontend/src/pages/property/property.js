import React, { useState } from "react";
import "./property.css";
import Navbar from "../../components/NavBar/navbar";
import { useAuthContext } from "../../hooks/useAuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import MyListing from "../../components/myListing/myListing";
import Reservations from "../../components/reservations/reservations";

export default function Property() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  if (user == null || user == "") {
    navigate("/");
  }

  const [active, setActive] = useState("listing");

  return (
    <div>
      <Navbar />
      <div className="listcontainer">
        <div className="titles">
          <h2 style={{ color: "#003580", fontWeight: "bolder" }}>
            Welcome Back ,{user.user.firstname}{" "}
          </h2>
          <Link to="/addproperty">
            <button className="addListBtn">
              {" "}
              <FontAwesomeIcon icon={faPlus} /> Create New Lisiting
            </button>
          </Link>
        </div>

        <div className="listingNav">
          <>
            <button onClick={() => setActive("listing")}>
              <h2 className="addListBtn">My Listing</h2>
            </button>

            <button onClick={() => setActive("reservation")}>
              <h2 className="addListBtn">View Reservations</h2>
            </button>
          </>
        </div>
      </div>
      {active === "listing" && <MyListing />}
      {active === "reservation" && <Reservations />}
    </div>
  );
}
