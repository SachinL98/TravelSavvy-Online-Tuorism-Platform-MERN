import React from 'react'
import EventList from '../../components/eventList/eventList'
import EventPageHeader from '../../components/eventList/eventPageHeader'
import SideBar from '../../components/SideBar'

export default function Events() {
  return (
    <div style={{margin: "50px"}}>
        <EventPageHeader/>
        <hr/>
        <br/>

        <div style={{width: "15%", display: "inline-block"}}>
          <SideBar/>
        </div>

        <div style={{width: "85%", display: "inline-block"}}>
          <EventList/>
        </div>
    </div>
  )
}
