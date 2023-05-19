import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function AddReview() {
    const {eventID} = useParams();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));
    const userID = user.user._id;
    const userName = user.user.firstname;

    const [reviewData, setReviewData] = useState('');
    const [rating, setRating] = useState(0);

    function sendReviewData(e){
        e.preventDefault();

        const newReview = {
            userID, eventID, userName, rating, reviewData
        }
        console.log(newReview);

        axios.post('http://localhost:8000/api/review/add', newReview)
        .then(()=>{
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'New Review Added !',
                showConfirmButton: false,
                timer: 1500
            })
            navigate(`/oneEvent/${eventID}`);
        })
        .catch((err)=>{
            console.log(err);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
        })
    }
  return (
    <div style={{ padding: "50px" }}>
      <h2><b>Add New Review</b> 📝</h2>
      <hr />
      <br />

      <div style={{padding: '50px'}}>
      <div class="form-floating mb-2">
            <input
                type="number"
                class="form-control"
                placeholder="Rating"
                onChange={(e)=>{setRating(e.target.value)}}
            />
            <label for="floatingInput" style={{color: "gray"}}>Rating</label>
        </div>
        <br/>
         <div class="form-floating mb-2">
            <textarea
                style={{height: '100px'}}
                type="text"
                class="form-control"
                placeholder="Review"
                onChange={(e)=>{setReviewData(e.target.value)}}
            />
            <label for="floatingInput" style={{color: "gray"}}>Review</label>
        </div>
        <br/>
        <button onClick={sendReviewData} className='btn btn-success' style={{width: "150px"}}>Save</button>
      </div>
      
    </div>
  );
}
