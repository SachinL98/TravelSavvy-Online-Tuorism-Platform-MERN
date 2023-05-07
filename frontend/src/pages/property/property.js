import React from "react";
import './property.css'
import Navbar from "../../components/NavBar/navbar";
import { useAuthContext } from "../../hooks/useAuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import MyListing from "../../components/myListing/myListing";

export default function Property() {

    const { user } = useAuthContext();
    const navigate = useNavigate();

    if(user == null || user == ""){
      navigate('/');
    }

    //console.log(user.user._id)

  return (
    <div>
      <Navbar />    
        <div className="listcontainer">
            <div className="titles">
            <h2 style={{color:"#003580",fontWeight:"bolder"}}>Welcome Back ,{user.user.firstname} </h2> 
            <Link to='/addproperty'>
            <button className="addListBtn"> <FontAwesomeIcon icon={faPlus} />  Create New Lisiting</button>
            </Link>   
            </div>
        </div>
      <MyListing/>
    </div>
  );
}
