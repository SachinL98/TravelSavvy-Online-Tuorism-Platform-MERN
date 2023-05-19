import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./myListing.css";
import useFetch from "../../hooks/useFetch";
import { useAuthContext } from "../../hooks/useAuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

export default function MyListing() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const [deleted, setDelete] = useState(false);

  const { data, loading, error } = useFetch(
    `http://localhost:8000/api/hotel/userId/${user.user._id}`
  );

  const setIdToDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const response = fetch(`http://localhost:8000/api/hotel/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });

        Swal.fire("Deleted!", "Your List has been deleted.", "success");
      }
    });

    navigate("/property");
  };

  const updateListItem = (id) => {
    navigate(`/updateproperty/${id}`);
  };

  return (
    <div>
      <div className="fp">
        {loading ? (
          "Loading"
        ) : (
          <>
            {data.map((item) => (
              <div class="card">
                {item.images[0] ? (
                  <img
                    className="cardimgtop"
                    src={item.images[0]}
                    alt="Card image cap"
                  />
                ) : (
                  <img
                    className="cardimgtop"
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/207507535.webp?k=766b5488977b325652ee811640d11ad5d3623f6db095ff08ca97ddca340dbb8b&o=&s=1"
                    alt="Card image cap"
                  />
                )}
                <div className="cardbody">
                  <h3 class="card-title">Name : {item.name}</h3>
                  <p class="card-type">Property Type : {item.type}</p>
                  <p class="card-city">City : {item.city}</p>
                  <p class="card-address">Address : {item.address}</p>
                  <p class="card-price">Price : Rs.{item.cheapestPrice}.00</p>
                  <div className="btn">
                    <div className="nothing"></div>

                    <div className="buttons">
                      <button
                        style={{ backgroundColor: "#003580" }}
                        onClick={() => {
                          updateListItem(item._id);
                        }}
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </button>

                      <button
                        style={{ backgroundColor: "#EE067D" }}
                        onClick={() => {
                          setIdToDelete(item._id);
                        }}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </div>
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
