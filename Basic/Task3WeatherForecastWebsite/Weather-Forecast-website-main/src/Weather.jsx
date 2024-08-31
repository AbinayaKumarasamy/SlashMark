import InfoBox_Comp from './InfoBox.jsx'
import SearchBox_Comp from './SearchBox.jsx'
import { useState } from 'react'

function Weather_Comp() {
    // q={city name},{state code},{country code}&limit={limit}&appid={API key}
    const WETR_URL = 'https://api.openweathermap.org/data/2.5/weather?'
    const API_KEY = '34d15bc40d5bc4750a09f9fb581aebc3'

    const[ ip_val , setIp_val ] = useState( '' )
    const[ information_obj , setInformation_obj ] = useState( {} )

    return (
        <div  style={ { minHeight : '70vh' , width : '60vw' , minWidth : '500px', border : 'none' , boxShadow : '1px 1px 5px blue' , fontSize : '15px'  , borderRadius : '7px' , backgroundColor : 'rgba(240, 255, 255, 0.822)' , padding : '10px'} }>
           <SearchBox_Comp val={ip_val} updator_func={ updateIp_val } search_func={ getWeatherInfo } />
           <br />
           <InfoBox_Comp info_obj={ information_obj }/>
        </div>
    )   

    function updateIp_val( event ) {
        console.log( event.target.value )
        setIp_val( event.target.value )
    }

    async function getWeatherInfo( ) {
        let req_data = {}
        try{
            let weather_url = WETR_URL+'q='+ip_val +'&appid='+API_KEY+'&units=metric'
            let response = await fetch( weather_url )
            let json_obj = await response.json()
    
            req_data = {
                temp : json_obj.main.temp,
                temp_max : json_obj.main.temp_max,
                temp_min : json_obj.main.temp_min,
                humidity : json_obj.main.humidity,
                pressure : json_obj.main.pressure,
                wind_speed : json_obj.wind.speed,
                place : json_obj.name,
    
                class : json_obj.weather[0].main,
                class_type : json_obj.weather[0].description,
                feels_like : json_obj.main.feels_like,

                err : false
            }
        } catch( err ) {
            console.log( err )
            req_data = { err : true }
        }

        console.log( '-------------------------------------------------------' )
        setInformation_obj( req_data )
        setIp_val( '' )
    }
}

export default Weather_Comp


