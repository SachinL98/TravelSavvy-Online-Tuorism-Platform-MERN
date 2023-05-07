import './login.css'
import  { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { Link } from "react-router-dom";
import Navbar from '../../components/NavBar/navbar';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login,error,isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email,password)
    //navigate('/home')
  };

  return (
    
    <div className="background">
      <Navbar />
    <form className="login" style={{backgroundColor:'0071c2'}} onSubmit={handleSubmit} action="">
      <h3 style={{color:"#003580" , fontWeight:"bold"}}>Login</h3>
      <br /><br />
      {error && <div className="error">{error}</div>}
      <label htmlFor="">Email</label>
      <input
        type="email"
        name=""
        onChange={(e) => setEmail(e.target.value)}
        value={email} placeholder='example@email.com'
      />
      <label htmlFor="">Password</label>
      <input
        type="password"
        name=""
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

<center> <button disabled={isLoading} style={{width:"50%"}}>Login</button></center>

      <br></br>
      <br></br>

      <div>  
            <Link className="link" to="/register">Don't have an account? <span>Sign Up</span></Link>
      </div>
    </form>
    </div>
  );
};

export default Login;
