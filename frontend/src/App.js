import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Navbar from "./components/NavBar/navbar.js";
import Home from './pages/Home/home.js'

import List from './pages/Lists/list.js'
import Hotel from './pages/Hotel/hotel.js'

import Events from "./pages/Events/Events.js";
import AddEvent from "./pages/Events/AddEvent.js";
import UpdateEvent from "./pages/Events/UpdateEvent.js";
import UserEvents from "./pages/Events/UserEvents";
import WishList from "./pages/Events/WishList";
import OneEvent from "./pages/Events/OneEvent";

import Login from "./pages/Auth/login";
import Signup from "./pages/Auth/signup";

function App() {
  //const { user } = useAuthContext();
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/hotels" element={<List/>} />
        <Route path="/hotels/:id" element={<Hotel/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/addEvent" element={<AddEvent/>} />
        <Route path="/updateEvent/:id" element={<UpdateEvent/>} />
        <Route path="/manageEvent" element={<UserEvents/>} />
        <Route path="/wishList" element={<WishList/>} />
        <Route path="/oneEvent/:id" element={<OneEvent/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
