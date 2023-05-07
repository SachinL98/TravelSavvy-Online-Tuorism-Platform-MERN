import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/home.js'
import List from './pages/Lists/list.js'
import Hotel from './pages/Hotel/hotel.js'
import Login from './pages/login/Login.js'
import Signup from './pages/signUp/Signup.js'
import Reserve from './components/reserveHotel/reserve.js'
import HotelOwner from './pages/signUp/partnerAccount.js'
import Property from "./pages/property/property.js";
import AddProperty from "./pages/addProperty/addProperty.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hotels" element={<List/>} />
        <Route path="/hotels/:id" element={<Hotel/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Signup/>} />
        <Route path="/reserve/:id" element={<Reserve/>} />
        <Route path="/partnerAccount" element={<HotelOwner/>} />
        <Route path="/property" element={<Property/>} />
        <Route path="/addproperty" element={<AddProperty/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
