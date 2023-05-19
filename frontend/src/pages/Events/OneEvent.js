import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function OneEvent() {
  const { id } = useParams();
  const [event, setEvent] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/event/${id}`)
      .then((res) => {
        setEvent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:8000/api/review/${id}`)
        .then((res)=>{
          setReviews(res.data);
        })
        .catch((err)=>{
          console.log(err);
        });

  }, []);


  return (
    <div style={{padding: "50px"}} >
      <h2><b>View About {event.name}</b></h2>
      <hr/>
    <br/>
      <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card" style={{ margin: "10px" }}>
              <img src={event.image} class="card-img-top" alt="" />
            </div>
          </div>
          <div className="col">
          <h3>{event.description}</h3>
          <hr/>
          <br/>
            <ul>
                <li><h4>This event will be held on {event.location}</h4></li><hr/>
                <li><h4>This is a {event.type}</h4></li><hr/>
                <li><h4>This will be starting at {new Date(event.startDate).toLocaleDateString()}</h4></li><hr/>
                <li><h4>This is {event.duration} days event</h4></li>
            </ul> 
          </div>
      </div>

      <div>
        <br/>
        <br/>
          <h2 style={{display: "inline-block"}}><b>Reviews And Ratings</b> 👌</h2>
          <Link to={`/addReview/${id}`}><button className="btn btn-warning" style={{display: "inline-block", marginLeft: "20px"}}>Add New</button></Link>
        <hr/>
          <table class="table">
            <thead>
              <tr>
                <th scope="col" style={{width: "200px"}}>Name</th>
                <th scope="col" style={{width: "200px"}}>Ratings</th>
                <th scope="col">Reviews</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review)=>(
                <tr>
                  <td>{review.userName}</td>
                  <td>{review.rating} Out Of 5</td>
                  <td>{review.reviewData}</td>
                </tr>
              ))}  
            </tbody>
          </table>
      </div>
    </div>
  );
}

