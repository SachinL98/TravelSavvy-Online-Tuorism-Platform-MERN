import React from "react";
import GoogleMapComponent from "../Components/googleMap";
import NavigationBar from "../Components/navbar";

export default function () {
  return (
    <div>
      <NavigationBar/>
      <GoogleMapComponent />
    </div>
  );
}
