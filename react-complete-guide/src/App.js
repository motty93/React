import React, {useState} from 'react'
import './App.css'
import {Person} from './Person/Person'

const app = props => {
  const [personState, setPersonState] = useState({
    persons: [
      {id: 'asdf', name: 'Max', age: 29},
      {id: 'vbasdfga', name: 'manu', age: 22},
      {id: 'ttdsfghhhh', name: 'john', age: 20},
    ],
  })

  // const [otherState, setOtherState] = useState('some other value')
  const [showPersonsState, setShowPersonsState] = useState({show: false})

  const deletePersonHandler = personIndex => {
    // const persons = [...personState.persons]
    const persons = personState.persons
    persons.splice(personIndex, 1)
    // let newPersons = personState.persons.filter(
    //   (_person, index) => index != personIndex,
    // )
    setPersonState({persons: persons})
  }

  const togglePersonsHandler = () => {
    const doesShow = showPersonsState.show
    setShowPersonsState({show: !doesShow})
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  }

  let persons = null
  if (showPersonsState.show) {
    persons = (
      <div>
        {personState.persons.map((person, index) => {
          return (
            <Person
              click={() => deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
            />
          )
        })}
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working</p>
      <button style={style} onClick={togglePersonsHandler}>
        Toggle Persons
      </button>
      {persons}
    </div>
  )
}

export default app
