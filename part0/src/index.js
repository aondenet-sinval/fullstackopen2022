import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>{
  return(
    <h1>{props.course}</h1>
  )
}
const Part = (props) =>{
  return(
    <p>Number of exercises total {props.part} {props.exercises}</p>
  )
}
const Content = (props) =>{
  return(
    <div>
    <Part part="'Fundamentals of React'" exercises="10" />
    <Part part="'Using props to pass data'" exercises="7" />
    <Part part="'State of a component'" exercises="14" />
    </div>
  )
}
const Total = (props) =>{
  return(
    <p>Number of exercises total {props.total}</p>
  )
}
const App = () => {
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;
  return (
    <React.Fragment>
      <Header course="'Half Stack application development'" />
      <Content />
      <Total total={exercises1 + exercises2 + exercises3} />
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
