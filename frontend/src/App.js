import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components

import Login from "./pages/Login";
import Signup from "./pages/Signup";



function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
           </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
