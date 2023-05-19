import axios from 'axios';
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export default function UserSpecificEvents() {
    const user = JSON.parse(localStorage.getItem('user'));
    const uID = user.user._id; 
    const navigate = useNavigate();

    const [events, setEvents] = useState([]);
    const [isDelete, setIsDelete] = useState(false);

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/event/get/${uID}`)
        .then((res)=>{
            setEvents(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
        setIsDelete(false);
    },[isDelete]);

    function deleteEvent(eID){
        //const response = window.confirm('Are you sure ?');
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:8000/api/event/delete/${eID}`)
                .then(()=>{
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Event Deleted !',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setIsDelete(true);
                })
                .catch((err)=>{
                    console.log(err);
                })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
          })
    
    };

    return (
        <div>
        <div class="row row-cols-1 row-cols-md-4 g-4" >
            {events?.map((eventData)=>(
            <div class="col">
                <div class="card" style={{margin: "10px"}}>
                <img src={eventData.image} class="card-img-top" alt="" />
                <div class="card-body">
                <h5 class="card-title"><b>{eventData.name}</b></h5>
                <p class="card-text">{eventData.description}</p>
                <div>
                    <Link to={`/updateEvent/${eventData._id}`}><button type="button" class="btn btn-primary btn-sm" style={{marginRight: "10px"}}>Update</button></Link>
                    <button onClick={() => deleteEvent(eventData._id)} type="button" class="btn btn-danger btn-sm">Delete</button>
                </div>
                </div>
            </div>
            </div>
            ))}
        </div>
    </div>
    )
}
