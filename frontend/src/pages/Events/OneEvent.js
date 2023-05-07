import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function OneEvent() {
  const { id } = useParams();
  const [event, setEvent] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/event/${id}`)
      .then((res) => {
        console.log(res);
        setEvent(res.data);
      })
      .catch((err) => {
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
    </div>
  );
}

