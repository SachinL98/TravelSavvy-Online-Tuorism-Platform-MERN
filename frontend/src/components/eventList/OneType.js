import React, {useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function OneType() {

  const user = JSON.parse(localStorage.getItem('user'));
  const userID = user.user._id;
  const [events, setEvents] = useState([]);
  const [searchKey, setSearchKey] = useState('')
  const {type} = useParams();
  console.log(type);

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/event/getType/${type}`)
    .then((res)=>{
      setEvents(res.data)
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })

  },[]);

  function addToWishList(event){
    const wishListItem = {userID, event};

    axios.post(`http://localhost:8000/api/wishlist/add`, wishListItem)
    .then(()=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Event Added To Wishlist',
        showConfirmButton: false,
        timer: 1500
      })
    })
    .catch((err)=>{
      console.log(err);
    })
  };

  return (
    <div style={{padding: "50px"}}>
      <div>
        <h2><b>Here are the {type} Events !</b> ✨</h2>
        <br/>
        <hr/>
      </div>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        {events.map((eventData) => (
          <div class="col">
            <div class="card" style={{ margin: "10px" }}>
              <div style={{height: "100px"}}>
                <img src={eventData.image} class="card-img-top" alt="" />
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  <div style={{height: "50px"}}>
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
  );
}
