import "../NavBar/navbar.css";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Navbar() {

  const {logout} = useLogout()
  const {user} = useAuthContext()

  const handleClick = ()=>{
    logout()
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"white",textDecoration:"none"}}>
          <span className="logo">Travel Savy</span>
        </Link>
        {/* <div className="navItems">
          <Link to="/login"><button className="navButton" type="button" class="btn btn-light" style={{marginRight: "10px"}}>Register</button></Link>
          <Link to="/signup"><button className="navButton" type="button" class="btn btn-light">Login</button></Link>
        </div> */}
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
    </div>
  );
}
