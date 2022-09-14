import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const Capital = (props) =>{
  const { capital, newName, newSearch } = props

    const result = capital.find(city => city.capital === newName);
    // if (result.name) {
    //   console.log('------------------------');
    //   // console.log('Código DDI: ', result.callingCodes[0]);
    //   console.log('País: ', result.name);
    //   console.log('População: ', result.population);
    //   console.log('Línguas: ', result.languages[0].name);
    //   console.log('Região: ', result.region);
    //   console.log('Moeda: ', result.currencies[0].name);
    // }
    let codigo, pais, population, languages, currency;
    if (result) {
      codigo =`Código DDI: ${result.callingCodes[0]}`
      pais = `País: ${result.name}`
      population = `População: ${result.population}`
      languages = `Línguas: ${result.languages[0].name}`
      currency = `Moeda: ${result.currencies[0].name}`
    }

  return(<div>
          Search city: <input type="text" onBlur={newSearch} />

          <p>{codigo}</p><p>{pais}</p><p>{population}</p>
          <p>{currency}</p><p>{languages}</p>

    </div>
  )
}
// <ul>
// {capital.map(person => (
//   <li key={person.name}>
//   {person.name}
//   </li>
// ))}
// </ul>
const App = ()=> {
  const [capital, setCapital] = useState([])
  const [newName, setNewName] = useState('Brasília')

  const url = "https://restcountries.com/"
  useEffect(() => {
  console.log('effect')
  axios
    .get(`${url}v2/all`).then(response => {
      console.log('promise fulfilled')
      setCapital(response.data)
    })
}, [])

// console.log('search: ',search);
const newSearch = (event)=>{
  const newName = event.target.value
  setNewName(newName)
}
    return (
      <div className="App">
        <Capital capital={capital} newName={newName} newSearch={newSearch} />
      </div>
    );

}

export default App;
