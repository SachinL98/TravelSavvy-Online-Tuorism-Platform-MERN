import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages & components
import TripPlan from "./Pages/TripPlan";

//Train
import AddNewTrain from "./Components/train/AddNewTrain";
import AllTrains from "./Components/train/AllTrains";
import EditTrain from "./Components/train/EditTrain";
import OneTrain from "./Components/train/OneTrain";

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
