import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages & components
import TripPlan from "./pages/TripPlan";

//Train
import AddNewTrain from "./components/train/AddNewTrain";
import AllTrains from "./components/train/AllTrains";
import EditTrain from "./components/train/EditTrain";
import OneTrain from "./components/train/OneTrain";

//car rental
import "./App.css";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import Car from "./Pages/CarDetails/Car";
import Checkout from "./Pages/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TripPlan />} />
          <Route path="/allTrains" element={<AllTrains />} />
          <Route path="/addNewTrain" element={<AddNewTrain />} />
          <Route path="/editTrain/:id" element={<EditTrain />} />
          <Route path="/oneTrain/:id" element={<OneTrain />} />

          <Route path="/carHome" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="car" element={<Car />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
