import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./InfoBox.css";
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({info}){
    const INIT_URL=
    "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    let  HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let  COLD_URL="https://images.unsplash.com/photo-1487621167305-5d248087c724?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL="https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (<div className="InfoBox">
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity > 80 ? RAIN_URL : info.temp>15 ? HOT_URL : COLD_URL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
            {info.humidity > 80 ? <ThunderstormIcon/> : info.temp>15 ? <SunnyIcon/> : <AcUnitIcon/> }
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                
                <div className="info-grid">
                <p>City:{info.city}</p>
                <p>Country:{info.country} </p>
                <p>Latitude:{info.latitude}&deg;</p> 
                <p>Longitude:{info.longitude}&deg;</p>
                <p>Temperature:{info.temp}&deg;C </p>
                <p>Min Temperature:{info.Mintemp}&deg;C </p>
                <p>Max Temperature:{info.Maxtemp}&deg;C </p>
                <p>Humidity:{info.humidity} </p>
                <p>Weather:{info.weather} </p>
                </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>
  );
}