import "../NavBar/navbar.css";
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"white",textDecoration:"none"}}>
          <span className="logo">Travel Savy</span>
        </Link>
        <div className="navItems">
          <button className="navButton" type="button" class="btn btn-light" style={{marginRight: "10px"}}>Register</button>
          <button className="navButton" type="button" class="btn btn-light">Login</button>
        </div>
      </div>
    </div>
  );
}
