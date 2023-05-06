import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/navbar.js";
import Home from './pages/Home/home.js'
import List from './pages/Lists/list.js'
import Hotel from './pages/Hotel/hotel.js'
import Events from "./pages/Events/Events.js";
import AddEvent from "./pages/Events/AddEvent.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hotels" element={<List/>} />
        <Route path="/hotels/:id" element={<Hotel/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/addEvent" element={<AddEvent/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
