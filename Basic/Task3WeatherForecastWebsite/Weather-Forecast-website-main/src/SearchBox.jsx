import * as React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function SearchBox_Comp( { val , updator_func , search_func } ) {
  return (
    <form action="">
            <legend style={ { boxShadow : '1px 1px 4px teal' , fontSize : '25px' , color : 'goldenrod' , borderRadius : '7px' , backgroundColor : 'white' , padding : '10px' , fontFamily : 'serif'} }> 
               <b> <ThunderstormIcon />  <WbSunnyIcon /> 
                    <span style={ { margin : '2px 15px 2px 15px' , color : 'darkblue'} }> Weather Forecasting Website  </span>  
                  <AcUnitIcon /> <WbCloudyIcon />
               </b> 
            </legend>
            <br />
            <div style={ { display : 'flex' , justifyContent : 'center' , alignItems : 'center'} }>
                <TextField  
                    value = { val } 
                    onChange = { updator_func  }  // Calling Updator Function ( To set Ip_Val )
                    id="outlined-basic" 
                    label="Enter City/Country name" 
                    variant="outlined"
                    style={ { width : '75%' , margin : '5px' , minWidth : '250px' , boxShadow : '1px 1px 2px teal' , borderRadius : '5px', backgroundColor : 'azure'} }  
                    required
                />

                <Button 
                  onClick = { search_func } 
                  variant="contained" 
                  style={ { padding : '15px' , boxShadow : '1px 1px 3px teal'} }
                >
                    <SearchIcon />
                </Button>
            </div>
    </form>
  );
}