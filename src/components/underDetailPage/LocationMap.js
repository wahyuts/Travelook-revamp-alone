import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

//MaT UI Stuff
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles (theme =>({
    contMap:{
        width:'100%', 
        height:'20%', 
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center',
        [theme.breakpoints.down('sm')]: {
            height:'10%'
        },
    },
    mapId:{
        width: '100%',
        height: '100%'
    }
}))


const LocationMap = () => {
    const classes = useStyles();
    const url = 
        "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";
    
    const [crimes, setCrimes] = useState([]);

    useEffect(()=>{
        const getData = async () => {
            try{
                const response = await axios.get(url);
                console.log(response)
                const data = await response.data;
                const dataSlice = data.slice(0,50);
                setCrimes(dataSlice);
            }
            catch(e){
                console.log(e)
            }
        };
        getData();
    },[])

    console.log('ccc', crimes)

    const defaultPosition = [52.629835, -1.133005];

    let customMarker = crimes.map((crime)=>{
        return (
            <Marker key={crime.id} 
                    position={[
                        crime.location.latitude,
                        crime.location.longitude,
                    ]}
            >
                <Popup>
                    <h2>{crime.category}</h2>
                    <p>{crime.location.street.name}</p>
                </Popup>
            </Marker>
        )
    })

    return ( 
        <div className={classes.contMap}>
            <MapContainer
                center={defaultPosition}
                zoom={13}
                id="mapid"
                className={classes.mapId}
            >
                 <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {customMarker}
            </MapContainer>
        </div>
     );
}
 
export default LocationMap;