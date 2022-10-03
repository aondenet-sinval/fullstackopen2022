import React, { useState, useEffect } from 'react'
import './App.css'
import routesPhone from './services/routes'

const phoneDel = (event) => {
  const name = event.target.name
  const id = event.target.value
  const ok = confirm(`Deseja excluir ${name}?`)
  if (ok) {
    routesPhone
      .trash(id)
  }else{
    alert(`Operação cancelada. ${name} não foi excluído.`)
  }

}

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
              <button onClick={phoneDel} value={person.id}
                name={person.name} >
                  delete
              </button>
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
  routesPhone
    .getAll()
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
      const updateName = confirm(`Err: The name ${result.name}
                        exists number: ${result.number}. See update click ok.`);
      if (updateName) {
        routesPhone
        .update(result.id, nameObject)
        .then(response => console.log(response))
      }
    }
    if(!result){
      routesPhone
      .create(nameObject)
      .then(response => console.log(response))
      // setPersons(persons.concat(nameObject))
      // setNewName('');
      // setNewPhone('');
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
    console.log('searchResult ', searchResult);
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
