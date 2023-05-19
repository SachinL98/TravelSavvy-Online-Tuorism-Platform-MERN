import React from 'react'
import UpdateEventHeader from '../../components/ManageEvents/UpdateEventHeader'
import UpdateEventForm from '../../components/ManageEvents/UpdateEventForm'

export default function UpdateEvent() {
  return (
    <div style={{padding: "50px"}}>
        <UpdateEventHeader/>
        <hr/>
        <br/>
        <UpdateEventForm/>
    </div>
  )
}
