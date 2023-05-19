import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function EventList() {
  const user = JSON.parse(localStorage.getItem("user"));
  const userID = user.user._id;
  const [events, setEvents] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/event/")
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function addToWishList(event) {
    const wishListItem = { userID, event };

    axios
      .post(`http://localhost:8000/api/wishlist/add`, wishListItem)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Event Added To Wishlist",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const filterdEvents = events?.filter((event) =>
    event.name.toLowerCase().includes(searchKey.toLowerCase())
  );

  return (
    <div>
      <div>
        <input
          style={{ width: "20%", padding: "10px"}}
          className="form-control"
          type="text"
          placeholder="Search Events Here"
          value={searchKey}
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
        ></input>
        <br />
        <hr />
        <div class="row row-cols-1 row-cols-md-4 g-4">
          {filterdEvents.map((eventData) => (
            <div class="col" >
              <Link to={`/oneEvent/${eventData._id}`} style={{textDecoration: "none" }} >
              <div class="card" style={{ margin: "10px", borderStyle: "none" }}>
                <div style={{height: "150px", width: "270px"}}>
                  <img src={eventData.image} class="card-img-top" alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
                <div class="card-body">
                  <h5 class="card-title" >
                    <div style={{height: "50px", color: "black"}}>
                      <b>{eventData.name}</b>
                    </div>
                  </h5>
                  <p>
                    <div style={{height: "30px"}}>
                      Start Date : {new Date(eventData.startDate).toLocaleDateString()} 
                    </div>
                  </p>
                  {/* <p class="card-text">{eventData.description}</p> */}
                  <div>  
                      {/* <button
                        type="button"
                        class="btn btn-light btn-sm"
                        style={{ marginRight: "10px" }}
                      >
                        Click To More Details
                      </button> */}
                      
                    {user.user.type == "traveller" && (
                      <button
                        onClick={() => addToWishList(eventData)}
                        type="button"
                        class="btn btn-warning btn-sm"
                      >
                        Add To Wish List
                      </button>
                    )}
                  </div>
                </div>
                </div>
                </Link>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}
