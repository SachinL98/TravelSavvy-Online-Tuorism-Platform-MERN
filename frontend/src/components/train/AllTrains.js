import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import ImageView from "../ImageView";

export default function AllTrains() {
  const [train, setTrain] = useState([]);
  const [deleted, setDeleted] = useState(false);
  //const user = JSON.parse(localStorage.getItem('user'));

  function deleteTrain(id) {
    const ans = window.confirm("Are you sure ?");
    if (ans) {
      axios
        .delete(`http://localhost:8000/train/deleteTrain/${id}`)
        .then((res) => {
          window.alert("Train Deleted !");
          setDeleted(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  //   function addToCart(item) {
  //     const userID = user.user._id;
  //     const productID = item._id;
  //     const productName = item.name;
  //     const price = item.price;
  //     const image = item.imageUrl;
  //     const cartItem = { userID, productID, productName, price, image };

  //     axios
  //       .post("http://localhost:8002/cart/add", cartItem)
  //       .then(() => {
  //         window.alert("Item Added To Cart !");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }

  useEffect(() => {
    function getAllTrains() {
      axios
        .get("http://localhost:8000/train/get")
        .then((res) => {
          setTrain(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getAllTrains();
    setDeleted(false);
  }, [deleted]);

  //   return (
  //     <div>
  //       <br></br>
  //       <h2
  //         style={{
  //           textAlign: "center",
  //           display: "inline-block",
  //           marginLeft: "45%",
  //         }}
  //       >
  //         Trains
  //       </h2>
  //       <Link to={`/addNewTrain`}>
  //         <button
  //           className="btn btn-success"
  //           style={{
  //             display: "inline-block",
  //             float: "right",
  //             marginRight: "10px",
  //           }}
  //         >
  //           AddNewTrain
  //         </button>{" "}
  //       </Link>
  //       <hr></hr>
  //       <div>
  //         {train.map((trainData) => (
  //           <div
  //             className="card"
  //             style={{ display: "inline-flex", margin: "20px" }}
  //             key={trainData._id}
  //           >
  //             <div className="card-img-top">
  //               <img src={trainData.imageUrl} style={{ width: "200px" }} />
  //             </div>
  //             <div className="card-body">
  //               <h5 className="card-title">{trainData.name}</h5>
  //               <p className="card-text">{trainData.description}</p>
  //               {/* <Link to={`/oneTrain/${trainData._id}`}>
  //                 <button className="btn btn-info btn-sm">See Details</button>{" "}
  //               </Link> */}
  //               {/* {(user.user.type == "seller" || user.user.type == "admin") && (
  //                 <Link to={`/editTrain/${trainData._id}`}>
  //                   <button className="btn btn-warning btn-sm">Edit</button>
  //                 </Link>
  //               )} */}
  //               {/* {(user.user.type == "seller" || user.user.type == "admin") && (
  //                 <button
  //                   style={{ marginLeft: "5px" }}
  //                   onClick={() => deleteTrain(trainData._id)}
  //                   className="btn btn-danger btn-sm"
  //                 >
  //                   Delete
  //                 </button>
  //               )} */}

  //                <button
  //                   style={{ marginLeft: "5px" }}
  //                   onClick={() => deleteTrain(trainData._id)}
  //                   className="btn btn-danger btn-sm"
  //                 >
  //                   Delete
  //                 </button>

  //               {/* {user.user.type == "buyer" && (
  //                 <button
  //                   onClick={() => addToCart(creamData)}
  //                   className="btn btn-success btn-sm"
  //                 >
  //                   Add To Cart
  //                 </button>
  //               )} */}
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );

  return (
    <div>
      <br />
      <h2
        style={{
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
          width: "fit-content",
          fontSize: '40px',
          fontWeight: "bold",
        }}
      >
        Trains
      </h2>
      <Link to="/addNewTrain">
        <button
          className="btn btn-success"
          style={{ float: "right", marginRight: "10px" }}
        >
          Add New Train
        </button>
      </Link>
      <hr />
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {train.map((trainData) => (
          <div
            className="card"
            style={{ margin: "20px", width: "300px" }}
            key={trainData._id}
          >
            <div className="card-img-top">
              <img
                src={trainData.imageLink}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                alt="Train"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{trainData.name}</h5>
              <p className="card-text">{trainData.description}</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {/* <Link to={`/oneTrain/${trainData._id}`} className="btn btn-info btn-sm">See Details</Link>
                {(user.user.type === "seller" || user.user.type === "admin") && (
                  <Link to={`/editTrain/${trainData._id}`} className="btn btn-warning btn-sm">Edit</Link>
                )} */}

                <button
                  style={{ marginLeft: "5px" }}
                  onClick={() => deleteTrain(trainData._id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>

                {/* {(user.user.type === "seller" || user.user.type === "admin") && (
                  <button onClick={() => deleteTrain(trainData._id)} className="btn btn-danger btn-sm">Delete</button>
                )} */}
                {/* {user.user.type === "buyer" && (
                  <button onClick={() => addToCart(creamData)} className="btn btn-success btn-sm">Add To Cart</button>
                )} */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
