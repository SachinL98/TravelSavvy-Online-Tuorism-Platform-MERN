import "../NavBar/navbar.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Navbar() {

  const { user } = useAuthContext();

  

  return (

    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <span className="logo">Booking.com</span>
        </Link>
        {user ? user.user.firstname  : (<div className="navItems">
          <Link to="/login">
            <button className="navButton">Login</button>
          </Link>
          <Link to="/register">
            <button className="navButton">Register</button>
          </Link>
        </div>)}
      </div>
    </div>
  );
}
