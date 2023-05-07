import "../NavBar/navbar.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faHome, faHotel, faPeopleArrowsLeftRight, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {

  const { user } = useAuthContext();

  

  return (

    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <span className="logo"> <FontAwesomeIcon icon={faHotel} />  TravelSavvy.com</span>
        </Link>

        {user  && user.user.type == "hotelOwner"  ? (
          
          <div className="navItems">
            <Link to="/property" style={{ color: "white", textDecoration: "none" }}>
            <FontAwesomeIcon icon={faHome} />
            <span className="listProperty">My Property</span>
          </Link>
          </div>)  
          : user && user.user.type == "user" ? (
            (
            <div className="navItems">
            <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>
            <FontAwesomeIcon icon={faUser} />
            <span className="listProperty"> {user.user.firstname}</span>
          </Link>
          </div>
            
          )): <div className="navItems">
          <Link to="/partnerAccount" style={{ color: "white", textDecoration: "none" }}>
          <span className="listProperty">List Your Property</span>
        </Link>
          <Link to="/login">
            <button className="navButton">Login</button>
          </Link>
          <Link to="/register">
            <button className="navButton">Register</button>
          </Link>
        </div>
        }
 
      </div>
    </div>
  );
}
