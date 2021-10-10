import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Cities from "./../../assets/geoJson/Cities.json";
import { Bar } from "react-chartjs-2";
import "./searchLocation.css";
import Pakistan from "./../../assets/geoJson/Pakistan.json";
import NavHomepage from "../Homepage/navHomepage";

//import SearchControl from './Search';
//import { OpenStreetMapProvider } from 'leaflet-geosearch';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { geosearch } from "esri-leaflet-geocoder";

import Pop from "../../assets/geoJson/Population.json";

export default function SearchLocation() {
  const [searchtext, setsearch] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const control = geosearch();
  }, []);

  const demarcatedPakistan = () => {
    return Pakistan.features.map((City) => {
      return <GeoJSON data={City}></GeoJSON>;
    });
  };

  const style = () => ({
    stroke: true,
    color: "red",
    opacity: 0.6,
    weight: 2,
    dashArray: "1",
    fill: true,
    fillColor: "red",
    fillOpacity: 0.3,
  });

  // useEffect(()=>{
  //   return(Cities.features.map((city)=>{
  //     if (searchtext===""){
  //       return null
  //     }
  //     else if(searchtext.toUpperCase()===city.properties.NAME_3.toUpperCase()){
  //       return(<GeoJSON data={city} style={style} ></GeoJSON>)
  //     }
  //   }));
  // })

  const searchCity = () => {
    return Cities.features.map((city) => {
      if (searchtext === "") {
        return null;
      } else if (
        searchtext.toUpperCase() === city.properties.NAME_3.toUpperCase()
      ) {
        var population = Pop.results.map((pop) => {
          if (pop.name.toUpperCase() === city.properties.NAME_3.toUpperCase()) {
            return pop.population;
          }
        });
        var name = Pop.results.map((pop) => {
          if (pop.name.toUpperCase() === city.properties.NAME_3.toUpperCase()) {
            return pop.name;
          }
        });

        const data = {
          labels: name,
          dataset: [
            {
              label: name,
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [population],
            },
          ],
        };
        return (
          <GeoJSON data={city} style={style}>
            <Popup>
              <h2>{name}</h2>
              <h2>{population}</h2>

              <Bar data={data} />
            </Popup>
          </GeoJSON>
        );
      }
    });
  };

  //  const prov = new OpenStreetMapProvider();
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <div>
      <NavHomepage></NavHomepage>
      <div
        style={{
          paddingLeft: "10vh",
          paddingRight: "10vh",
          paddingBottom: "10vh",
          justifyContent: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <input
            value={searchtext}
            type="text"
            placeholder="Search city"
            className="searchBar"
            onChange={(e) => setsearch(e.target.value)}
            style={{ width: "100%" }}
          />
          <input
            type="submit"
            style={{ width: "100%", justifyContent: "center" }}
          />
        </form>

        <MapContainer
          center={[30.96475, 70.939934]}
          zoom={6}
          style={{ width: "100%", height: "100vh" }}
        >
          <TileLayer
            // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          {demarcatedPakistan()}
          {show ? searchCity() : null}
        </MapContainer>
      </div>
    </div>
  );
}
