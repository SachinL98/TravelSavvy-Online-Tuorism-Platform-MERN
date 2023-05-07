import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function EventList() {
  const user = JSON.parse(localStorage.getItem('user'));
  const userID = user.user._id;
  const [events, setEvents] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/event/')
    .then((res)=>{
      setEvents(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[]);

  function addToWishList(event){
    const wishListItem = {userID, event};

    axios.post(`http://localhost:8000/api/wishlist/add`, wishListItem)
    .then(()=>{
      window.alert('Added to wishlist');
    })
    .catch((err)=>{
      console.log(err);
    })
  };

  return (
    <div>
      <div class="row row-cols-1 row-cols-md-4 g-4" >
      {events.map((eventData)=>(
        <div class="col">
            <div class="card" style={{margin: "10px"}}>
            <img src={eventData.image} class="card-img-top" alt=""/>
            <div class="card-body">
              <h5 class="card-title"><b>{eventData.name}</b></h5>
              <p class="card-text">{eventData.description}</p>
              <div>
                <Link to={`/oneEvent/${eventData._id}`}><button type="button" class="btn btn-primary btn-sm" style={{marginRight: "10px"}}>View Details</button></Link> 
                {user.user.type == 'traveller' && (
                    <button onClick={() => addToWishList(eventData)} type="button" class="btn btn-warning btn-sm">Add To Wish List</button>
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
