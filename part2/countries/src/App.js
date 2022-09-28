import React, { useState, useEffect } from 'react';
import Temperature from './Temperature';
import axios from 'axios';
import './App.css';

//Key weather forecast component
const keyEnv = process.env.REACT_APP_API_KEY

const Detail = (props)=>{
  const [show, setShow] = useState('w3-hide')
  const showDetail = (event) => {
    if (show === 'w3-hide') {
      setShow('w3-show')
    }else {
      setShow('w3-hide')
    }

  }
  const { countries, index } = props
  console.log('countries ', countries);

    return(<div >
      <p className={
          show === 'w3-hide'
          ? show
          : show}>Capital: {countries.capital}</p>
      <p className={
          show === 'w3-hide'
          ? show
          : show}>Language native: {countries.nativeLanguage}</p>
      <p className={
          show === 'w3-hide'
          ? show
          : show}>Subregião: {countries.subregion}</p>
      <button name={index} type="submit" onClick={showDetail}>show/hide</button>
      </div>)
}

const Show = ({result, showValue, setShowValue,
            showDetail, showIndice})=>{

  const paises = [];
  //traversing the countries and filling the array
    result.forEach(countrie =>{
        paises.push(countrie)
    })

    //Select groups from 1 to 10 countries
    const selectedsGroup =
      paises.map((countries, index) => <li key={index} >
        <b>País:</b> {countries.name.common}
          <Detail index={index} showIndice={showIndice}
                  showValue={showValue}  countries={countries} />
        </li>);
    //Select 1 country and display details
    const selectedsDetails =
      paises.map((countries, index) => <li key={index}>
        <h1>{countries.name.common}</h1><br />
        <b>Capital:</b> {countries.capital}<br />
        <b>Área:</b> {countries.area}<br />
        <b>Região:</b> {countries.region}<br />
        <img width="50%" src={countries.flags.svg} alt="flag" />
        <h3>Informe de clima atual:</h3>
        <Temperature city={countries.capital} keyEnv={keyEnv} />
        </li>);

  if (selectedsGroup.length < 11 && selectedsGroup.length > 1) {
    return(<div className="w3-left">
            <ul className="list">{selectedsGroup}</ul>
      </div>
    )
  }
  //Detailed presentation of only one city/country
  if (selectedsDetails.length === 1) {
    return(<div className="w3-left">
            <ul className="list">{selectedsDetails}</ul>
      </div>
    )
  }
  //If there are more than 10 or no country, show the sub message
  if (selectedsGroup.length > 10 && selectedsGroup.length < 20) {
    return(<div className="w3-left">
            Too many matches, specify another filter
      </div>
    )
  }
  return(<div>
          No search countries.
    </div>
  )
}
const Form = (props) =>{
  const { handleName, result, showDetail,
       showValue, setShowValue, showIndice } = props
  return(<div className="w3-tag w3-border">
          Search city: <input className="w3-input" type="text"
                              onChange={handleName} />
          <Show result={result} showValue={showValue}
          setShowValue={setShowValue} showDetail={showDetail}
          showIndice={showIndice} />
    </div>
  )
}
const App = ()=> {
  const [city, setCity] = useState([])
  const [newName, setNewName] = useState('')

  const url = "https://restcountries.com"
  useEffect(() => {
  axios
    .get(`${url}/v3.1/all`).then(response => {
      setCity(response.data);
    })
}, [])

//
let selectedCountries = new RegExp(newName)

const result = city.filter(newCity => newCity.name.common.search(selectedCountries) >= 0)
//

const handleName = (event)=>{
  const newName = event.target.value
  //Avoiding very long results with just one letter
  if (newName.length > 1 && newName.length < 15) {
    setNewName(newName)
  }
}
    return (
      <div className="App">
        <Form newName={newName} result={result}
              handleName={handleName} />

      </div>
    );

}

export default App;
