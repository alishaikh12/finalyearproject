import React,{useState,useEffect} from 'react';
import { MapContainer,TileLayer,GeoJSON  } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import Cities from './../../assets/geoJson/Cities.json';

import './searchLocation.css'
import Pakistan from './../../assets/geoJson/Pakistan.json';
//import SearchControl from './Search';
//import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export default function SearchLocation(){
    const[searchtext,setsearch] = useState('');



    const demarcatedPakistan = () =>{
      return(Pakistan.features.map((City)=>{
        return(
          <GeoJSON
          data={City}
          >
          </GeoJSON>
        );
       
      }));
    }
  
    const style = () => ({
      stroke: true,
      color: "red",
      opacity: 0.6,
      weight: 2,
      dashArray: "1",
      fill: true,
      fillColor: "red",
      fillOpacity: 0.3,
      })
      
    useEffect(()=>{
      return(Cities.features.map((city)=>{
        if (searchtext===""){
          return null
        }
        else if(searchtext.toUpperCase()===city.properties.NAME_3.toUpperCase()){
          return(<GeoJSON data={city} style={style} ></GeoJSON>)
        }
      })); 
    })
  
   
    //   const searchCity = () => {
      
    //   return(Cities.features.map((city)=>{
    //     if (searchtext===""){
    //       return null
    //     }
    //     else if(searchtext.toUpperCase()===city.properties.NAME_3.toUpperCase()){
    //       return(<GeoJSON data={city} style={style} ></GeoJSON>)
    //     }
    //   }));
    // }
  
  //  const prov = new OpenStreetMapProvider();
  

    return(
        <div>
<form action="" className='form'>
          <input
          value={searchtext} 
          type="text" 
          placeholder="Search city" 
          className="searchBar"  
          onChange={e =>{setsearch(e.target.value) 
           e.preventDefault()}}/>
          <FontAwesomeIcon icon={faSearch} className="searchIcon" />
        </form> 

        <MapContainer
        center={[30.964750, 70.939934]}
        zoom={5}
        style={{width:"100%", 
          height:"100vh"}}
       
        
        >

                    <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       
        />

{/* <SearchControl  
          provider = {prov}
          showMarker={true}
          showPopup={true}
          popupFormat={({ query, result }) => console.log(result.label)}
          maxMarkers={3}
          retainZoomLevel={true}
          animateZoom={true}
          autoClose={true}
          searchLabel={""}
          keepResult={true}            
          
            /> */}


        {demarcatedPakistan()}
        {/* {searchCity()} */}
        

        </MapContainer>

      
    </div>
        
    );
}