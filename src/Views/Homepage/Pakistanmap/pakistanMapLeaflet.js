import React from 'react';
import { MapContainer, TileLayer, Popup, GeoJSON,Circle } from 'react-leaflet'
import Province from '../../../assets/geoJson/Province.json'


export default function PakistanMap(){
    
    return(
        <div style={{padding:'80px'}}>
        <MapContainer center={[30.964750, 70.939934]} zoom={5.4} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          Province.features.map((item) => (
              <GeoJSON data={item}>
               <Popup>
                 <b>Name</b>
                 <br/>
                 {item.properties.NAME_1},
                 <br/>
                 <b>Population</b>
                 <br/>
                 {item.population}
                 
               </Popup>
               <Circle center={[30.964750, 70.939934]} pathOptions={{color:'blue',fillColor:'azure'}} radius={50000} />
               
           
               </GeoJSON>
          ))
        }
      </MapContainer>
      </div>
    );
}