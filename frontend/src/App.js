import { BrowserRouter, Routes, Route } from "react-router-dom";


//pages & components
import TripPlan from "./pages/TripPlan";

//Train
import AddNewTrain from './components/train/AddNewTrain';
import AllTrains from './components/train/AllTrains';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<TripPlan />} />
        <Route path="/allTrains" element={<AllTrains/>} />
        <Route path="/addNewTrain" element={<AddNewTrain/>} />
        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App