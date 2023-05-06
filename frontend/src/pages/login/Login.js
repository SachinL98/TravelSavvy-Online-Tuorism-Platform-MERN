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
      <h3>Login</h3>
      {error && <div className="error">{error}</div>}
      <label htmlFor="">Email</label>
      <input
        type="email"
        name=""
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label htmlFor="">Password</label>
      <input
        type="password"
        name=""
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={isLoading}>Login</button>

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
