import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

//Temperature
const Temperature = (props)=>{
  const [result,setResult] = useState([])
  const city = props.city
  const url = "https://api.openweathermap.org/data/2.5/"
  const key = props.keyEnv
  useEffect(() => {
  axios
    .get(`${url}weather?q=${city}&appid=${key}`).then(response => {
      setResult(response.data);
    })
}, [city]);

console.log('isarray result ', Array.isArray(result));
const temperature = [];
result.main
? temperature.push(result.main)
: temperature.push({
  humidity: 0,
  temp: 0,
  temp_max: 0,
  temp_min: 0
  })
//
const selectedTemperature =
  temperature.map((weather, index) => <li key={index}>
    <b>Umidade:</b> {weather.humidity}<br />
    <b>Temperatura:</b> {
      weather.temp !== 0
      ? (weather.temp - 273.15).toFixed(2)
      : 0 }<br />
    <b>Temp. máxima:</b> {
      weather.temp_min !== 0
      ? (weather.temp_min - 273.15).toFixed(2)
      : 0 }<br />
    <b>Temp. mínima:</b> {
      weather.temp_min !== 0
      ? (weather.temp_min - 273.15).toFixed(2)
      : 0}<br />
    </li>);

  return(<ul>{selectedTemperature}</ul>)
}

export default Temperature;
