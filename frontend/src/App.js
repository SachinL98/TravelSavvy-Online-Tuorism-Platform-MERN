import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/navbar.js";
import Home from './pages/Home/home.js'
import List from './pages/Lists/list.js'
import Hotel from './pages/Hotel/hotel.js'

import Login from './pages/login/Login.js'
import Signup from './pages/signUp/Signup.js'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hotels" element={<List/>} />
        <Route path="/hotels/:id" element={<Hotel/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
