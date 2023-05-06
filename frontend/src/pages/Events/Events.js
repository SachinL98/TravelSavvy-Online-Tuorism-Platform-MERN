import React from 'react'
import EventList from '../../components/eventList/eventList'
import EventPageHeader from '../../components/eventList/eventPageHeader'

export default function Events() {
  return (
    <div style={{margin: "50px"}}>
        <EventPageHeader/>
        <hr/>
        <br/>
        <EventList/>
    </div>
  )
}
