import React from 'react'

export default function eventPageHeader() {
  return (
    <div>
        <div style={{display: "inline-block"}}>
            <h2><b>Pick a Event & Enjoy !</b> ❤️</h2>
            <p style={{fontFamily: "cursive"}}>Now you can find your favourite events and save them 💫</p>
        </div>

        <div style={{display: "inline-block", float: "right"}}>
            <button type="button" class="btn btn-success" style={{marginRight: "10px", backgroundColor: "#ad006b", borderStyle: "none"}}>Manage Events</button>
            <button type="button" class="btn btn-success" style={{marginRight: "10px", backgroundColor: "#ad006b", borderStyle: "none"}}>Add New Event</button>
            <button type="button" class="btn btn-success" style={{backgroundColor: "#ad006b", borderStyle: "none"}}>View My Events</button>
        </div>
    </div>
  )
}
