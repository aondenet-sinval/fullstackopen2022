import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

const Filter = (props)=>{
  const { handleSearchName, searchName } = props

  return(<div>
          <label>filter shown with:
          <input name="search" onBlur={handleSearchName} />
          </label>
          <p>resultado:  {searchName}</p>
        </div>
      )
}

const PersonForm = (props) =>{
  const { addName, newName, newPhone, handleNameChange,
          handlePhoneChange } = props;
  return(<form onSubmit={addName} >
            <div>
              name: <input
                      name="name"
                      value={newName}
                      onChange={handleNameChange}
                       />
            </div>
            <div>
            number: <input
                    name="number"
                    value={newPhone}
                    onChange={handlePhoneChange}
                      />
            </div>
            <div>
              <button type="submit">add</button>
            </div>
          </form>
        )
}
const Persons = ({persons})=>{
  return(<ul>
          {persons.map(person => (
            <li key={person.name}>
            {person.name} {person.number}
            </li>
          ))}
          </ul>
        )
}
const App = (props) => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ searchName, setSearchName ] = useState('search name')
  const [ newPhone, setNewPhone ] = useState('')
  useEffect(() => {
  console.log('effect')
  axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
}, [])
  const addName = (event) => {
    event.preventDefault()

    const nameObject = {
      name: newName,
      number: newPhone
    }
    //pesquisando se o nome existe
    let result = persons.find(pessoa => pessoa.name === newName);
    if (result) {
      alert(`Err: The name ${result.name} exists number: ${result.number}`);
    } else {
      setPersons(persons.concat(nameObject))
      setNewName('');
      setNewPhone('');
      console.log(`${newName} is already added to phonebook`);
    }
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }
  //Pesquisa de nomes
  const handleSearchName = (event) => {
    const search = event.target.value;
    console.log('handleSearchName: ', search);
    let searchResult = persons.find(pessoa => pessoa.name === search);
    if (searchResult) {
      let result = `Nome: ${searchResult.name} número ${searchResult.number}.`
      setSearchName(result)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Search</h3>
      <Filter searchName={searchName}
        handleSearchName={handleSearchName}
         />
      <h3>Cadastro</h3>
      <PersonForm
        addName={addName} handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange} newName={newName}
        newPhone={newPhone}
        />
      <h2>Numbers</h2>
      <div>debug: {newName} {newPhone}</div>
      <Persons persons={persons} />
    </div>
  )
}

export default App;
