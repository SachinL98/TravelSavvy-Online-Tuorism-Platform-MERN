import React, { useState } from 'react'
import { Link, useAsyncError } from 'react-router-dom'

export default function eventPageHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
        <div style={{display: "inline-block"}}>
            <h2><b>Hello {user.user.firstname} 👋 Pick a Event & Enjoy !</b> ❤️</h2>
            <p style={{fontFamily: "cursive"}}>Now you can find your favourite events and save them 💫</p>
        </div>

        <div style={{display: "inline-block", float: "right"}}>
            {user.user.type == 'event' && (
              <div>
                  <Link to='/manageEvent'><button type="button" class="btn btn-success" style={{marginRight: "10px", backgroundColor: "#ad006b", borderStyle: "none"}}>Manage Events</button></Link> 
                  <Link to='/addEvent'><button type="button" class="btn btn-success" style={{marginRight: "10px", backgroundColor: "#ad006b", borderStyle: "none"}}>Add New Event</button></Link> 
              </div>
            )}
            {user.user.type == 'traveller' && (
              <div>
                 <Link to='/wishList'><button type="button" class="btn btn-success" style={{backgroundColor: "#ad006b", borderStyle: "none"}}>Whishlist 💟</button></Link> 
              </div>
            )}
        </div>
    </div>
  )
}
