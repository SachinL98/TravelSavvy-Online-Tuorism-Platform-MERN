import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar() {

    const liStyle = {
        color : "#ad006b",
        textDecoration: "none",
        paddingBottom: "20px" ,
    }

    return (
      <div>
          <ul style={{listStyleType: "none", marginLeft: "-25px" }}>
              <Link to='/events' style={{textDecoration: 'none'}}><li style={liStyle} >All Events</li></Link> 
              <Link to='/oneType/CulturalType' style={{textDecoration: 'none'}}><li style={liStyle}>Cultural Type</li></Link>
              <Link to='/oneType/ReligiousFestivel' style={{textDecoration: 'none'}}><li style={liStyle}>Religious Festivel</li></Link>
              <Link to='/oneType/Musical' style={{textDecoration: 'none'}}><li style={liStyle}>Musical</li></Link> 
              <Link to='/oneType/FoodFestivel' style={{textDecoration: 'none'}}> <li style={liStyle}>Food Festivel</li></Link> 
              <Link to='/oneType/Carnivel' style={{textDecoration: 'none'}}><li style={liStyle}>Carnivel</li></Link> 
        </ul>
      </div>
    )
}
