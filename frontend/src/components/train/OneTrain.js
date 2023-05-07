import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function OneTrain() {
  const { id } = useParams();
  const [train, setTrain] = useState([]);

  useEffect(() => {
    function getOneTrain() {
      axios
        .get(`http://localhost:8000/train/getOne/${id}`)
        .then((res) => {
          setTrain(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getOneTrain();
  }, []);

  return (
    <div className="container" style={{ marginTop: "6%", maxWidth: "50%", display: "flex", flexDirection: "column", alignItems: "center"  }}>
      <div className="card">
        <img
          src={train.imageLink}
          className="card-img-top"
          alt="Train"
          style={{ height: "300px", objectFit: "cover", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
        />
        <div className="card-body ">
          <h3 className="card-title  text-center" style={{fontSize: '30px', fontWeight: 'bold'}}>{train.name}</h3>
          <p className="card-text  text-center" style={{fontSize: '20px', fontWeight: 'bold'}}>{train.description}</p>
          <table className="table">
            <tbody>
              <tr>
                <th style={{ width: "450px" }}>Start Station:</th>
                <td>{train.startStation}</td>
              </tr>
              <tr>
                <th>End Station:</th>
                <td>{train.endStation}</td>
              </tr>
              <tr>
                <th>Start Time:</th>
                <td>{train.startTime}</td>
              </tr>
              <tr>
                <th>End Time:</th>
                <td>{train.endTime}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Link to={`/allTrains`} className="btn btn-info btn-lg" style={{ marginTop: "20px" }}>Back</Link>
    </div>
  );
  
  
}
