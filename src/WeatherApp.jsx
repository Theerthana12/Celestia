import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState(
      {
         city:"Bengaluru",
         country: "IN",
         latitude:22, 
         longitude:77,
         temp: 23,
         Mintemp: 21,
         Maxtemp: 24,
         humidity: 44,
         weather: "cloud",
      }
    );

    let updateInfo=(newInfo)=>{
         setWeatherInfo(newInfo); 
    }
    
    
    return(
    <div className="WeatherApp" style={{textAlign:"center"}}>
        <h1 className="app-title">Weather App</h1>
 
     <div className="weather-layout" > 
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
    </div>
  );
}