import React from "react";

export default function AddNewEvent() {
  return (
    <div style={{ padding: "50px" }}>
      <h2>Lets Add A New Event 😀</h2>
      <p>
        You can add All type of Events including Festivels, Carnivels, Religious
        Events and many other type of events here.
      </p>
      <p>They will show in a categorized manner 👌</p>
      <hr/>
      <br/>
      <div style={{maxWidth: "600px"}}>
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
          <input
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
          <input
            type="text"
            class="form-control"
            placeholder="Event Type"
          />
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

        <div>
          <button>Clear Form</button>
          <button>Submit</button>
        </div>
        
      </div>
    </div>
  );
}
