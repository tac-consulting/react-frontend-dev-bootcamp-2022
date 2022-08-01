import axios from "axios";
import { useEffect, useState } from "react";
const Weather=()=>{
    const [value, setValue] = useState(null);
const getWeatherdata = async() =>{
    await axios.get("https://goweather.herokuapp.com/weather/Curitiba").then((resp) => setValue(resp.data)).catch((err) => console.log(err))
}

console.log(value)


useEffect ( () => {
 getWeatherdata() 
}, [])
 return(
<>
<h1>{value?.temperature}</h1>
<h1>{value?.description}</h1> 
         {value?.forecast.map((item) =>  {
        return <div key={item.id}>
            <span>{item.wind}</span>
            <span>{item.temperature}</span>
            {/* description={item.desxcription} temperature={item.temperature} */}
        </div>})}


</>

 )
 }
export default Weather;