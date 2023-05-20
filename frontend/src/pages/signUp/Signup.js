import React from "react";
import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar/navbar";

const Signup = () => {
  const [firstname, setfName] = useState("");
  const [lastname, setlName] = useState("");
  const [mobilenumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setCpassword] = useState("");
  const { signup, error, isLoading } = useSignup();
  const type = "user"

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(
      firstname,
      lastname,
      mobilenumber,
      type,
      email,
      password,
      confirmpassword
    );
  };

  /*const handleDropdown = (event) => {
    setType(event.target.value);
  };*/

  return (
    <div>
      {/* <Navbar/> */}
    <form className="signup" onSubmit={handleSubmit} action="">
      <h3 style={{color:"#003580" , fontWeight:"bold"}}>Sign Up</h3>
      <br />
      {error && <div className="error">{error}</div>}
      <label htmlFor="">First Name</label>
      <input
        type="text"
        name=""
        onChange={(e) => setfName(e.target.value)}
        value={firstname}  placeholder="eg : Kamal"
      />
      <label htmlFor="">Last Name</label>
      <input
        type="text"
        name=""
        onChange={(e) => setlName(e.target.value)}
        value={lastname} placeholder="eg : Perera"
      />
      <label htmlFor="">Mobile Number</label>
      <input
        type="text"
        name=""
        onChange={(e) => setMobileNumber(e.target.value)}
        value={mobilenumber} placeholder="eg : 07x xx xx xxx"
      /> 
      <label htmlFor="">Email</label>
      <input
        type="email"
        name=""
        onChange={(e) => setEmail(e.target.value)}
        value={email} placeholder="example@gmail.com"
      /> 
      <label htmlFor="">Password</label>
      <input
        type="password"
        name=""
        onChange={(e) => setPassword(e.target.value)}
        value={password} placeholder="Example@123"
      />
      <label htmlFor="">Confirm Password</label>
      <input
        type="password"
        name=""
        onChange={(e) => setCpassword(e.target.value)}
        value={confirmpassword} placeholder="Example@123"
      />

<center> <button disabled={isLoading} style={{width:"50%"}}>Sign Up</button></center>

      <br></br>
      <br></br>

      <div>
        <Link className="link" to="/login">
          Already Registred ? <span>Login</span>
        </Link>
      </div>
    </form>
    </div>
  );
};

export default Signup;
