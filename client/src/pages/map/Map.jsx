import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, InfoWindow } from "react-google-maps";
import { useNavigate } from "react-router-dom";

const Map = () => {
  const [zoom, setZoom] = useState(15);
  const [lat, setLat] = useState(37.4419);
  const [lng, setLng] = useState(-122.1419);

  useEffect(() => {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: zoom,
      center: new google.maps.LatLng(lat, lng),
    });

    const marker = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(lat, lng),
    });

    google.maps.event.addListener(marker, "click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: "This is my location!",
      });

      infoWindow.open(map, marker);
    });
  }, [zoom, lat, lng]);

  return (
    <div>
      <GoogleMap
        id="map"
        zoom={zoom}
        center={new google.maps.LatLng(lat, lng)}
        onZoomChanged={setZoom}
        onCenterChanged={setLat}
      >
        <Marker
          position={new google.maps.LatLng(lat, lng)}
        />
      </GoogleMap>
    </div>
  );
};

export default Map;
