import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import UserDetails from "./UserDetails";
import UserBookings from "./UserBookings";

export default function () {
  const { user } = useAuthContext();

  const [active, setActive] = useState("profile");
  return (
    <div>
      <div className="listcontainer">
        <div className="titles">
          <h2 style={{ color: "#003580", fontWeight: "bolder" }}>
            Welcome Back ,{user.user.firstname}{" "}
          </h2>
        </div>
        <div className="listingNav">
          <>
            {
              <button onClick={() => setActive("profile")}>
                <h2 className="addListBtn">My Profile</h2>
              </button>
            }

            {
              <button onClick={() => setActive("reservation")}>
                <h2 className="addListBtn">View Bookings</h2>
              </button>
            }
          </>
        </div>
        <br />
        <br />
        <br />
        {active === "profile" && <UserDetails />}
        {active === "reservation" && <UserBookings />}
      </div>
    </div>
  );
}
