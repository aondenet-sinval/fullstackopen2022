import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>{
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) =>{
  return(
    <div>
      <p>{props.parts} {props.ex}</p>
    </div>
  )
}
const Total = (props) =>{
  return(
    <p>Number of exercises total {props.parts}</p>
  )
}
const App = () => {

  const course = {
     name: 'Half Stack application development',
     parts: [
       {
         name: 'Fundamentals of React',
         exercises: 10
       },
       {
         name: 'Using props to pass data',
         exercises: 7
       },
       {
         name: 'State of a component',
         exercises: 14
       }
     ]
   }

  return (
    <React.Fragment>
      <Header course={course.name} />
      <Content parts={course.parts[0].name} ex={course.parts[0].exercises} />
      <Content parts={course.parts[1].name} ex={course.parts[1].exercises} />
      <Content parts={course.parts[2].name} ex={course.parts[2].exercises} />
      <Total parts={course.parts[0].exercises + course.parts[1].exercises
      + course.parts[2].exercises} />
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
