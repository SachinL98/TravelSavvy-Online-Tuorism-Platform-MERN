import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home.js";
import List from "./pages/Lists/list.js";
import Hotel from "./pages/Hotel/hotel.js";
import Login from "./pages/login/Login.js";
import Signup from "./pages/signUp/Signup.js";
import Reserve from "./components/reserveHotel/reserve.js";
import HotelOwner from "./pages/signUp/partnerAccount.js";
import Property from "./pages/property/property.js";
import AddProperty from "./pages/addProperty/addProperty.js";
import UpdateProperty from "./pages/UpdateProperty/updateProperty.js";
import Profile from "./pages/UserProfile/Profile.js";

import Navbar from "./components/NavBar/navbar.js";

import Events from "./pages/Events/Events.js";
import AddEvent from "./pages/Events/AddEvent.js";
import UpdateEvent from "./pages/Events/UpdateEvent.js";
import UserEvents from "./pages/Events/UserEvents";
import WishList from "./pages/Events/WishList";
import OneEvent from "./pages/Events/OneEvent";
import OneType from "./components/eventList/OneType";

// import Login from "./pages/Auth/login";
// import Signup from "./pages/Auth/signup";

import AddReview from "./components/Review/AddReview";

//pages & components
import TripPlan from "./pages/TripPlan.js";

//Train
import AddNewTrain from "./components/train/AddNewTrain.js";
import AllTrains from "./components/train/AllTrains.js";
import EditTrain from "./components/train/EditTrain.js";
import OneTrain from "./components/train/OneTrain.js";

//car rental
import "./App.css";
import Home2 from "./pages/Home/Home2.js";
import Search from "./pages/Search/Search.js";
import Car from "./pages/CarDetails/Car.js";
import Checkout from "./pages/Checkout/Checkout.js";
import ReservationSuccessful from "./components/reservationSuccess.js";
import AddNewCar from "./components/car/AddNewCar";
import UpdateCar from "./components/car/EditCar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/reserve/:id" element={<Reserve />} />
        <Route path="/partnerAccount" element={<HotelOwner />} />
        <Route path="/property" element={<Property />} />
        <Route path="/addproperty" element={<AddProperty />} />
        <Route path="/updateproperty/:id" element={<UpdateProperty />} />

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/events" element={<Events />} />
        <Route path="/addEvent" element={<AddEvent />} />
        <Route path="/updateEvent/:id" element={<UpdateEvent />} />
        <Route path="/manageEvent" element={<UserEvents />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/oneEvent/:id" element={<OneEvent />} />
        <Route path="/oneType/:type" element={<OneType />} />
        <Route path="/addReview/:eventID" element={<AddReview />} />

        <Route path="/tripPlan" element={<TripPlan />} />
        <Route path="/allTrains" element={<AllTrains />} />
        <Route path="/addNewTrain" element={<AddNewTrain />} />
        <Route path="/editTrain/:id" element={<EditTrain />} />
        <Route path="/oneTrain/:id" element={<OneTrain />} />
        <Route path="/carHome" element={<Home2 />} />
        <Route path="/search" element={<Search />} />
        <Route path="/oneCar/:id" element={<Car />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="reservationSucccess" element={<ReservationSuccessful />} />
        <Route path="/addNewCar" element={<AddNewCar />} />
        <Route path="/updateCar" element={<UpdateCar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
