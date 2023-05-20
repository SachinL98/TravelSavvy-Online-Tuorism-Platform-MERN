import React, { useEffect, useState } from 'react'
import Events from '../../images/events.png';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import storage from "../../firebase/firebaseConfig.js"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';

export default function UpdateEventForm() {
  const navigate = useNavigate();

  const {id} = useParams();
  const [event, setEvent] = useState('');
  
  const [image, setImage] = useState(event.image);
  const [name, setName] = useState(event.name);
  const [description, setDesription] = useState(event.description);
  const [location, setLocation] = useState(event.location);
  const [organizerName, setOrganizerName] = useState(event.organizerName);
  const [type, setType] = useState(event.type);
  const [startDate, setStartDate] = useState(event.startDate);
  const [duration, setDuration] = useState(event.duration)

  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/event/${id}`)
    .then((res)=>{
      console.log(res);
      setEvent(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  function sendUpdateData(e){
    e.preventDefault();

    const updated = {
      image, name, description, location, organizerName, type, startDate, duration
    }

    axios.patch(`http://localhost:8000/api/event/update/${id}`, updated)
    .then((res)=>{
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Event Updated !",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/manageEvent');
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  function handleChange(event) {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
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
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setImage(url);
          });
      }
    );
  }


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
            defaultValue={event.name}
            onChange={(e)=>{setName(e.target.value)}}
          />
          <label for="floatingInput" style={{color: "gray"}}>Event Name</label>
        </div>

        <div class="form-floating mb-3">
          <textarea
            style={{height: "100px"}}
            type="text"
            class="form-control"
            placeholder="Description"
            defaultValue={event.description}
            onChange={(e)=>{setDesription(e.target.value)}}
          />
          <label for="floatingInput" style={{color: "gray"}}>Description</label>
        </div>

        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Location"
            defaultValue={event.location}
            onChange={(e)=>{setLocation(e.target.value)}}
          />
          <label for="floatingInput" style={{color: "gray"}}>Location</label>
        </div>

        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Organizer's Name"
            defaultValue={event.organizerName}
            onChange={(e)=>{setOrganizerName(e.target.value)}}
          />
          <label for="floatingInput" style={{color: "gray"}}>Organizer's Name</label>
        </div>

        <div class="form-floating mb-3">
          <select class="form-control"
          defaultValue={event.type}
          onChange={(e)=>{setType(e.target.value)}}>
            <option value="">Select and option</option>
            <option value="Cultural Event">Cultural Event</option>
            <option value="Religious Festivel">Religious Festivel</option>
            <option value="Festivel">Festivel</option>
            <option value="Musical">Musical</option>
            <option value="Food Festivel">Food Festivel</option>
            <option value="Carnivel">Carnivel</option>
          </select>
          <label for="floatingInput" style={{color: "gray"}}>Event Type</label>
        </div>

        <div class="form-floating mb-3">
          <input
            type="date"
            class="form-control"
            placeholder="Start Date"
            defaultValue={event.startDate}
            onChange={(e)=>{setStartDate(e.target.value)}}
          />
          <label for="floatingInput" style={{color: "gray"}}>Start Date</label>
        </div>

        <div class="form-floating mb-3">
          <input
            type="number"
            class="form-control"
            placeholder="Duration in Days"
            defaultValue={event.duration}
            onChange={(e)=>{setDuration(e.target.value)}}
          />
          <label for="floatingInput" style={{color: "gray"}}>Duration in Days</label>
        </div>
        <br/>

        <div style={{float: "right"}}>
          <button type="button" class="btn btn-warning" style={{marginRight: "10px"}}>Clear Form</button>
          <button type="button" class="btn btn-primary"onClick={sendUpdateData} >Update</button>
        </div>
      </div>

      <div className="col" style={{display: "inline-block", marginLeft: "40px"}}>
        <img src={Events} style={{borderRadius: "20px"}}/>
      </div>

    </div>
  )
}
