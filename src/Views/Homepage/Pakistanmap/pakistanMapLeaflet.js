import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, Polygon } from 'react-leaflet'
import Province from '../../../assets/geoJson/Province.json'


export default function PakistanMap(){
    // const popupcheck = () =>  {
    //     var coordCounter = 0;
    //     if(Province.features[0].geometry.coordinates[coordCounter]==){

    //     }
    // };

    
    return(
        <div style={{padding:'80px'}}>
        <MapContainer center={[30.3753, 69.3451]} zoom={5.4} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <GeoJSON data={Province}/> */}

        {
          Province.features.map((item) => (
            // <Polygon pathOptions={{color: 'black', fillColor:'red'}} positions={item.geometry.coordinates}/>
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
               </GeoJSON>
          ))
        }

        {/* <Marker position={[33.6844,73.0479]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
      </div>
    );
}