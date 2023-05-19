import React from 'react'
import AddEventHeader from '../../components/ManageEvents/AddEventHeader'
import EventAddForm from '../../components/ManageEvents/EventAddForm'

export default function AddEvent() {
  return (
    <div style={{padding: "50px"}}>
      <AddEventHeader/>
      <hr/>
      <br/>
      <EventAddForm/>
    </div>
  )
}
