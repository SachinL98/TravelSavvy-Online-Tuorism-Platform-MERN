import React from 'react'
import UserSpecificEventsHeader from '../../components/ManageEvents/UserSpecificEventsHeader'
import UserSpecificEvents from '../../components/ManageEvents/UserSpecificEvents'

export default function UserEvents() {
  return (
    <div style={{padding: "50px"}}>
        <UserSpecificEventsHeader/>
        <hr/>
        <br/>
        <UserSpecificEvents/>
    </div>
  )
}
