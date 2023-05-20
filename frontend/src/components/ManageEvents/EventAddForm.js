import React, { useState } from "react";
import Events from '../../images/events.png';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {storage} from "../../firebase/firebaseConfig"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import './events.css';
import Swal from "sweetalert2";

export default function AddNewEvent() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const userID = user.user._id
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [orgnizerName, setOrganizerName] = useState('');
  const [type, setType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [duration, setDuration] = useState(0);

  const [file, setFile] = useState(null);
  const [percent, setPercent] = useState(0);

  function handleChange(event) {
    setFile(event.target.files[0]);
  };

  const handleDropdown = (event) => {
    setType(event.target.value);
  };

  const handleUpload = async () => {
    const uploadTask = storage.ref(`images/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        //setProgress(progress);
      },
      error => {
        console.log(error);
      },
      async () => {
        await storage
          .ref("images")
          .child(file.name)
          .getDownloadURL()
          .then(url => {
            setImage(url);
          });
         
      }
    );
  }
console.log(image);
  

  function sendEventData(e){

    console.log(image);
    e.preventDefault();
    const newEvent = {userID, image, name, description, location, orgnizerName, type, startDate, duration};

    axios.post('http://localhost:8000/api/event/add', newEvent)
    .then(()=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'New Event Added !',
        showConfirmButton: false,
        timer: 1500
      })
      navigate('/events');
    })
    .catch((err)=>{
      console.log(err);
    })
  };

  function clearForm(){
    setImage('');
    setName('');
    setDescription('');
    setLocation('');
    setOrganizerName('');
    setType('');
    setStartDate('');
    setDuration(0);
  };

  return (
    <div className="row" style={{ padding: "50px"}}>

      <div className="col" style={{width: "600px" ,display: "inline-block"}}>
        <div class="mb-3">
          <input 
            type="file"
            class="form-control"  
            onChange={handleChange}   
          />
          <div style={{marginTop: "10px"}}>
            <button type="button" class="btn btn-secondary" onClick={handleUpload}>Upload</button>
            <p>{percent} "% done"</p>
          </div>
        </div>

        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Event Name"
            onChange={(e)=>{
              setName(e.target.value)
            }}
          />
          <label for="floatingInput" style={{color: "gray"}}>Event Name</label>
        </div>

        <div class="form-floating mb-3">
          <textarea
            style={{height: "100px"}}
            type="text"
            class="form-control"
            placeholder="Description"
            onChange={(e)=>{
              setDescription(e.target.value)
            }}
          />
          <label for="floatingInput" style={{color: "gray"}}>Description</label>
        </div>

        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Location"
            onChange={(e)=>{
              setLocation(e.target.value)
            }}
          />
          <label for="floatingInput" style={{color: "gray"}}>Location</label>
        </div>

        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Organizer's Name"
            onChange={(e)=>{
              setOrganizerName(e.target.value)
            }}
          />
          <label for="floatingInput" style={{color: "gray"}}>Organizer's Name</label>
        </div>

        <div class="form-floating mb-3">
          <select class="form-control"
            onChange={handleDropdown}
            value={type}>
            <option value="">Select and option</option>
            <option value="CulturalEvent">Cultural Event</option>
            <option value="ReligiousFestivel">Religious Festivel</option>
            <option value="Festivel">Festivel</option>
            <option value="Musical">Musical</option>
            <option value="FoodFestivel">Food Festivel</option>
            <option value="Carnivel">Carnivel</option>
          </select>
          <label for="floatingInput" style={{color: "gray"}}>Event Type</label>
        </div>

        <div class="form-floating mb-3">
          <input
            type="date"
            class="form-control"
            placeholder="Start Date"
            onChange={(e)=>{
              setStartDate(e.target.value)
            }}
          />
          <label for="floatingInput" style={{color: "gray"}}>Start Date</label>
        </div>

        <div class="form-floating mb-3">
          <input
            type="number"
            class="form-control"
            placeholder="Duration in Days"
            onChange={(e)=>{
              setDuration(e.target.value)
            }}
          />
          <label for="floatingInput" style={{color: "gray"}}>Duration in Days</label>
        </div>
        <br/>

        <div style={{float: "right"}}>
          <button onClick={clearForm} type="button" class="btn btn-warning" style={{marginRight: "10px"}}>Clear Form</button>
          <button onClick={sendEventData} type="button" class="btn btn-primary">Save</button>
        </div>
      </div>

      <div className="col eventAddImg" style={{display: "inline-block", marginLeft: "40px"}}>
        <img src={Events} style={{borderRadius: "20px"}}/>
      </div>

    </div>
  );

}
