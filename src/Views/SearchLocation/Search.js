

import  { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import {useEffect} from 'react';
import { useMap } from 'react-leaflet';
import './searchbar.css'

const SearchControl = (props) => {
    const map = useMap();

  useEffect(() => {
    const searchControl = new GeoSearchControl({
      provider: props.provider,
      ...props,
    });

    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, [props]);

  return null;
   
};

export default SearchControl;