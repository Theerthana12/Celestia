import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchhBox.css"

export default function SearchhBox({updateInfo}) {
  let [city,setCity]=useState("");
  let [error,setError]=useState(false);
  const API_URL="https://api.openweathermap.org/data/2.5/weather"
  // const API_KEY="85f692814f17086848a9828867960e55"
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  let getWeatherInfo = async()=>{
       let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       if (!response.ok){
        throw new Error("No such Place Identified");
       }
        let jsonResponse= await response.json();
        return{
         city: city,
         country: jsonResponse.sys.country,
         latitude:jsonResponse.coord.lat, 
         longitude:jsonResponse.coord.lon,
         temp: jsonResponse.main.temp,
         Mintemp: jsonResponse.main.temp_min,
         Maxtemp: jsonResponse.main.temp_max,
         humidity: jsonResponse.main.humidity,
         weather: jsonResponse.weather[0].description,
       };
  };


  let handleChange=(evt)=>{
    setCity(evt.target.value);
  };

  let handleSubmit= async (evt)=>{
    evt.preventDefault();
    try{
     let newInfo = await getWeatherInfo();
     updateInfo(newInfo);
     setError(false);
     setCity("");
    }catch (err){
     setError(true);
    }
  };

  return (
    <div className="Searchbox">
      <h2>Search City</h2>
      <form onSubmit={handleSubmit}>
        <TextField 
        id="city" 
        label="City Name" 
        variant="outlined" 
        required 
        value={city}
        onChange={handleChange}
         />
      <br></br>
      <br></br>
      <Button variant="contained" type="submit">
       Search
      </Button>
      {error && <p style={{color:"red"}}>No such place Identified!</p>}
      </form>
     </div>
  );
}
