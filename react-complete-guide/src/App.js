import React, {useState} from 'react'
import './App.css'
import {Person} from './Person/Person'

const app = props => {
  const [personState, setPersonState] = useState({
    persons: [
      {name: 'Max', age: 29},
      {name: 'manu', age: 22},
      {name: 'john', age: 20},
    ],
  })

  // const [otherState, setOtherState] = useState('some other value')
  const [showPersonsState, setShowPersonsState] = useState({show: false})

  const onClickSwitchButton = newName => {
    setPersonState({
      persons: [
        {name: newName, age: personState.persons[0].age + 1},
        {
          name: personState.persons[1].name,
          age: personState.persons[1].age + 1,
        },
        {
          name: personState.persons[2].name,
          age: personState.persons[2].age + 1,
        },
      ],
    })
  }

  const nameChangeHandler = e => {
    setPersonState({
      persons: [
        {name: personState.persons[0].name, age: personState.persons[0].age},
        {name: e.target.value, age: personState.persons[1].age},
        {name: personState.persons[2].name, age: personState.persons[2].age},
      ],
    })
  }

  const deletePersonHandler = personIndex => {
    let newPersons = personState.persons.filter(
      (_person, index) => index != personIndex,
    )
    setPersonState({persons: newPersons})
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
