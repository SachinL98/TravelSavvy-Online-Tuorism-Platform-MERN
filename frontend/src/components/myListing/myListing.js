import React from "react";
import "./myListing.css";
import useFetch from "../../hooks/useFetch";
import { useAuthContext } from "../../hooks/useAuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function MyListing() {
  const { user } = useAuthContext();

  const { data, loading, error } = useFetch(
    `http://localhost:8000/api/hotel/userId/${user.user._id}`
  );

  console.log(data);

  return (
    <div>
      <h2 className="listingHeader">My Listing</h2>
      <div className="fp">
        {loading ? (
          "Loading"
        ) : (
          <>
            {data.map((item) => (
              <div class="card">
                <img
                  className="cardimgtop"
                  src={item.images[0]}
                  alt="Card image cap"
                />
                <div className="cardbody">
                  <h3 class="card-title">Name : {item.name}</h3>
                  <p class="card-type">Property Type : {item.type}</p>
                  <p class="card-city">City : {item.city}</p>
                  <p class="card-address">Address : {item.address}</p>
                  <p class="card-price">Price : Rs.{item.cheapestPrice}.00</p>
                  <div className="btn">
                    <button style={{ backgroundColor: "white" }}>
                      <FontAwesomeIcon icon={faPen} />
                    </button>
                    <button style={{ backgroundColor: "#EE067D" }}>
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
