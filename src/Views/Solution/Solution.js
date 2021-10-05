import React,{useRef,useEffect} from 'react';

import { loadModules } from 'esri-loader';



import geojsonurl  from '../../assets/geoJson/water.geojson';

function Solution() {
    
    const MapEl = useRef(null)

    useEffect(
        ()=>{
        let view;

        loadModules(["esri/views/MapView", "esri/WebMap","esri/layers/GeoJSONLayer"],{
            css:true
        }).then(
            ([MapView,WebMap,GeoJSONLayer])=>{
            const webmap = new WebMap({
                basemap:'topo-vector',

            })  
            view = new MapView({
                map:webmap,
                center:[70.939934,30.964750],
                zoom:5,
                container:MapEl.current
            })
            const geoJsonLayer = new GeoJSONLayer({
                url: geojsonurl,
            })

            webmap.add(geoJsonLayer)

            //  const GeoJson = new GeoJSONLayer({
            //      url: "https://s3.us-east-1.amazonaws.com/hdx-production-filestore/resources/f7500b69-d711-454c-89a9-14a90bed7f18/pakistan.geojson?AWSAccessKeyId=AKIAXYC32WNARK756OUG&Expires=1628758884&Signature=gcHtAI7QmoAIXd%2BOHExlnumvRBI%3D"
            //  });

            //  webmap.add(GeoJson)
            
        })
        return()=>{
            if(!!view){
                view.destroy()
                view = null       
            }
        }
    
    
    })
    
    return (
        <div style={{height:800}} ref={MapEl}>
            
        </div>
    );
};

export default Solution;