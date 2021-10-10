import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import FertileLand from "../../assets/geoJson/FertileLand.json";
import Waterbodies from "../../assets/geoJson/water.json";
import Pakistan from "../../assets/geoJson/Pakistan.json";
import NavHomePage from "../Homepage/navHomepage";

const demarcatedCountry = () => {
  return Pakistan.features.map((Country) => {
    return <GeoJSON data={Country} style={Countrystyle}></GeoJSON>;
  });
};

const Countrystyle = () => ({
  color: "#a7a7a7",
  opacity: 0.6,
  weight: 2,
  fill: true,
  fillColor: "#a7a7a7",
  fillOpacity: 0.3,
});

const Waterstyle = () => ({
  color: "#084f49",
  opacity: 0.6,
  weight: 2,
  fill: true,
  fillColor: "#73c9c2",
  fillOpacity: 0.3,
});

const fertileLand = () => {
  return FertileLand.features.map((fertile) => {
    return <GeoJSON data={fertile} style={Fertilestyle}></GeoJSON>;
  });
};
const Fertilestyle = () => ({
  color: "#33ed00",
  opacity: 0.6,
  weight: 2,
  fill: true,
  fillColor: "#89ff69",
  fillOpacity: 0.3,
});

function handleWater() {
  return Waterbodies.features.map((bodies) => {
    return <GeoJSON data={bodies} style={Waterstyle}></GeoJSON>;
  });
}

function Solution() {
  const [water, setWater] = useState(false);
  const [fertile, setFertile] = useState(false);

  return (
    <div style={{ backgroundColor: "#f7f7f7" }}>
      <NavHomePage></NavHomePage>

      <div
        style={{
          paddingLeft: "10vh",
          paddingRight: "10vh",
          justifyContent: "center",
        }}
      >
        <span>
          <button onClick={() => setWater(!water)}>Water Check</button>
          <button onClick={() => setFertile(!fertile)}>Fertility Check</button>
        </span>
        <MapContainer
          center={[30.96475, 70.939934]}
          zoom={5}
          style={{ width: "100%", height: "80vh" }}
        >
          <TileLayer
            // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />

          {demarcatedCountry()}
          {water ? handleWater() : null}
          {fertile ? fertileLand() : null}
        </MapContainer>
      </div>
    </div>
  );
}

export default Solution;
