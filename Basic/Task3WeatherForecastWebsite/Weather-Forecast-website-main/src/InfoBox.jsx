import './InfoBox.css'

function InfoBox_Comp( { info_obj } ) {
    const thunderstorm_url  = 'https://lakelandconnect.net/wp-content/uploads/2019/06/lightening.jpg'
    const drizzle_url = 'https://thumbs.dreamstime.com/b/obliquely-drizzling-rain-illuminated-sunlight-over-summer-meadow-field-grasses-obliquely-drizzling-rain-over-summer-153535541.jpg'
    const rain_url = 'https://s7d2.scene7.com/is/image/TWCNews/heavy_rain_jpg-6'
    const snow_url = 'https://snowbrains.com/wp-content/uploads/2016/03/12087743_10153666342100817_5806960385227926316_o1.jpg'
    const clear_url = 'https://wallpapercave.com/wp/wp2894344.jpg'
    const cloud_url = 'https://img.freepik.com/premium-photo/supercell-storm-clouds-meadow-with-green-grass-summer-storm-clouds_559531-7624.jpg'
    const haze_url = 'https://media.wired.co.uk/photos/606dba04751ea43ccd9898b5/16:9/w_1280,c_limit/london-heatwave.jpg?mbid=social_retweet'
    const fog_url = 'https://th.bing.com/th/id/OIP.fP0f76psSU8YQyMYVnI0eQHaFj?rs=1&pid=ImgDetMain'
    const mist_url = 'https://www.lightstalking.com/wp-content/uploads/mist-1-5.jpg'
    const tornado_url = 'https://afb.accuweather.com/hubfs/GettyImages-535057762%20(1).jpg#keepProtocol'


   return (
    <div  style={ { color : 'darkblue' , width : '98.5%' , fontFamily : 'serif' } }>
    {
        Object.keys(info_obj).length!=0 ?
            
                               info_obj.err ?
                                                <h3> No Such place exist !! </h3>
                                            :
                                                <>   
                                                    <div style={ { display : 'flex' , justifyContent : 'center' , alignItems : 'center'} } >  
                                                        <h4> Place : { info_obj.place } &nbsp; &nbsp; </h4> 
                                                        <img className='img_cls' src={ getImageUrl(info_obj.class) } alt={ info_obj.class } />
                                                        <b> &nbsp; &nbsp; Weather type : { info_obj.class }  </b>
                                                    </div> 
                                                    <br />
                                                    <b style={ { display : 'flex' , flexWrap : 'wrap' , justifyContent : 'space-evenly' , alignContent : 'space-evenly'} } >
                                                        <div className='flexer'> 
                                                            <div> Avg Temperature  </div> 
                                                            <div> : {info_obj.temp}&deg;C </div>  
                                                        </div>
                                                        <div className='flexer'> 
                                                            <div> Avg Temperature  </div> 
                                                            <div> : {info_obj.temp_max}&deg;C </div> 
                                                        </div>
                                                        <div className='flexer'> 
                                                            <div> Min Tempearture  </div> 
                                                            <div> : {info_obj.temp_min}&deg;C </div> 
                                                        </div>
                                                        <div className='flexer'> 
                                                            <div> Humdity  </div> 
                                                            <div> : { info_obj.humidity } </div> 
                                                        </div>
                                                        <div className='flexer'> 
                                                            <div> Pressure </div> 
                                                            <div> : { info_obj.pressure } </div> 
                                                        </div>
                                                        <div className='flexer'> 
                                                            <div> Wind-Speed </div> 
                                                            <div> : { info_obj.wind_speed } </div> 
                                                        </div>
                                                        
                                                        <h2> There could be { info_obj.class_type } and it would feel like { info_obj.feels_like }&deg;C </h2>
                                                    </b>
                                                </>
                                        :
                                                <> </>
        }
     </div>
   )

   function getImageUrl( img_name ) {
      switch( img_name ) {
        case 'Thunderstorm' : return thunderstorm_url;
        case 'Drizzle' : return drizzle_url;
        case 'Rain' : return rain_url;
        case 'Snow' : return snow_url;
        case 'Clear' : return clear_url;
        case 'Clouds' : return cloud_url;
        case 'Haze' : return haze_url;
        case 'Fog' : return fog_url;
        case 'Mist' : return mist_url;
        case 'Tornado' : return tornado_url;
        default : console.log('image not found'); return '';
      } 
   } 
}

export default InfoBox_Comp




//  - 
//  - 
// 	 - 
// 	] - 
// Clear - 
// Clouds - 