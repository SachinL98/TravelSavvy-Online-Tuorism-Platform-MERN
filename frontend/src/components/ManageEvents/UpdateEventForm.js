import React from 'react'
import Events from '../../images/events.png';

export default function UpdateEventForm() {
  return (
    <div className="row" style={{ padding: "50px"}}>

      <div className="col" style={{width: "600px" ,display: "inline-block"}}>
        <div class="mb-3">
          <input 
            type="file"
            class="form-control"      
          />
        </div>

        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Event Name"
          />
          <label for="floatingInput" style={{color: "gray"}}>Event Name</label>
        </div>

        <div class="form-floating mb-3">
          <textarea
            style={{height: "100px"}}
            type="text"
            class="form-control"
            placeholder="Description"
          />
          <label for="floatingInput" style={{color: "gray"}}>Description</label>
        </div>

        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Location"
          />
          <label for="floatingInput" style={{color: "gray"}}>Location</label>
        </div>

        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Organizer's Name"
          />
          <label for="floatingInput" style={{color: "gray"}}>Organizer's Name</label>
        </div>

        <div class="form-floating mb-3">
          <select class="form-control">
            <option value="">Select and option</option>
            <option value="Cultural Event">Cultural Event</option>
            <option value="Religious Festivel">Religious Festivel</option>
            <option value="Festivel">Festivel</option>
            <option value="Musical">Musical</option>
            <option value="Food Festivel">Food Festivel</option>
            <option value="Carnivel">Carnivel</option>
          </select>
          <label for="floatingInput" style={{color: "gray"}}>Event Type</label>
        </div>

        <div class="form-floating mb-3">
          <input
            type="date"
            class="form-control"
            placeholder="Start Date"
          />
          <label for="floatingInput" style={{color: "gray"}}>Start Date</label>
        </div>

        <div class="form-floating mb-3">
          <input
            type="number"
            class="form-control"
            placeholder="Duration in Days"
          />
          <label for="floatingInput" style={{color: "gray"}}>Duration in Days</label>
        </div>
        <br/>

        <div style={{float: "right"}}>
          <button type="button" class="btn btn-warning" style={{marginRight: "10px"}}>Clear Form</button>
          <button type="button" class="btn btn-primary">Update</button>
        </div>
      </div>

      <div className="col" style={{display: "inline-block", marginLeft: "40px"}}>
        <img src={Events} style={{borderRadius: "20px"}}/>
      </div>

    </div>
  )
}
