import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function NavBar() {
  
  const {logout} = useLogout()

  const {user} = useAuthContext()

  const handleClick = ()=>{
    logout()
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "green"}}>
        <a className="navbar-brand" style={{fontSize: "30px"}}>
          Natura
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/"> <a className="nav-link" style={{color: "white"}}>
                <b>Home</b> <span className="sr-only">(current)</span>
              </a></Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{color: "white"}}
              >
                All Products
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/allCreamsView"> <a className="dropdown-item">
                  Creams
                </a></Link>
                <a className="dropdown-item">
                  Body Lotions
                </a>
                <a className="dropdown-item">
                  Vitamins
                </a>
                <a className="dropdown-item">
                  Herbal Soap
                </a>
                <a className="dropdown-item">
                  Oils
                </a>
              </div>
            </li>
            <Link to="/viewFeedback"><a style={{color: "white"}}>Feedbacks</a></Link>
          </ul>
          
          {/* <Link to="/login"><button type="button" class="btn btn-info" style={{marginRight: "10px"}}>Login</button></Link>
          <form className="form-inline my-2 my-lg-0"> 
          </form> */}
          <nav>
          {user && (
          <div>
            <span>{user.user.email}</span>
            <Link to="/"><button className="btn btn-light" style={{marginLeft: "10px"}} onClick={handleClick}> Logout</button></Link> 
          </div>)}
          {!user && (
          <div>
            <Link to="/login"><button type="button" class="btn btn-light" style={{marginRight: "10px"}}>Login</button></Link>
            <Link to="/signup"><button type="button" class="btn btn-light">Signup</button></Link>
          </div>)}
        </nav>
        </div>
      </nav>
    </div>
  );
};
