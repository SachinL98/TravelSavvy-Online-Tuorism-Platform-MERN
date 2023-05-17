import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar() {

    const liStyle = {
        paddingBottom: "30px",
        color : "#ad006b",
    }


  return (
    <div>
        <ul style={{listStyleType: "none" }}>
            <Link to='/events'><li style={liStyle}>All Events</li></Link> 
            <Link to='/oneEvent/CulturalEvent'><li style={liStyle}>Cultural Event</li></Link>
            <Link to='/oneEvent/ReligiousFestivel'><li style={liStyle}>Religious Festivel</li></Link>
            <Link to='/oneEvent/Musical'><li style={liStyle}>Musical</li></Link> 
            <Link to='/oneEvent/FoodFestivel'> <li style={liStyle}>Food Festivel</li></Link> 
            <Link to='/oneEvent/Carnivel'><li style={liStyle}>Carnivel</li></Link> 
      </ul>
    </div>
  )
}
