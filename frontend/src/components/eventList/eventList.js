import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import SideBar from "../SideBar";


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
      {/* <div style={{width: "15%", display: "inline-block"}}>
        <SideBar />
      </div> */}
      <div>
        <input
          style={{ width: "20%", padding: "10px" }}
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
            <div class="col">
              <div class="card" style={{ margin: "10px" }}>
                <img src={eventData.image} class="card-img-top" alt="" />
                <div class="card-body">
                  <h5 class="card-title">
                    <b>{eventData.name}</b>
                  </h5>
                  <p class="card-text">{eventData.description}</p>
                  <div>
                    <Link to={`/oneEvent/${eventData._id}`}>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        style={{ marginRight: "10px" }}
                      >
                        View Details
                      </button>
                    </Link>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
