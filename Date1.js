import * as React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { Link, Route, Routes } from "react-router-dom";
import './Date1.css'
import { isBefore } from 'date-fns';
const Date1=()=> {
   const current = new Date();
   const Change=(date)=>{
       const isB=isBefore(date,current);
       console.log(isB);
   }
  return (

      <div className="ContainerbigDate">
    <LocalizationProvider dateAdapter={AdapterDateFns} className='ContainerDate'>
      <StaticDatePicker
        orientation="landscape"
        openTo="day"
        value={current}
      //  shouldDisableDate={isWeekend}
        onChange={Change}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    <Link to ='/'>
    {/* <button className='Back1'>Back</button> */}
        <a href="#" className='Back1'> Previous &rarr;</a>
    </Link>
    <Link to='/Save'>
    {/* <button className='Save1'>Save Booking</button> */}
    <a href="#" className='Next1'> &#8592; Next </a>
    </Link>
    </div>
 
  );
}
export default Date1;
