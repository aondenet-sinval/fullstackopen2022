import React from 'react'
import { createRoot} from 'react-dom/client'

const Header = (props) =>{
  return(
    <h1>{props.course}</h1>
  )
}

const Part = (props) =>{
  return(
    <div>
      <p>{props.parts} {props.ex}</p>
    </div>
  )
}
const Content = (props) =>{
  const course = props.course
  return(
    <div>
      <Part parts={course.parts[0].name} ex={course.parts[0].exercises} />
      <Part parts={course.parts[1].name} ex={course.parts[1].exercises} />
      <Part parts={course.parts[2].name} ex={course.parts[2].exercises} />
    </div>
  )
}
const Total = (props) =>{
  const total = props.course.parts[0].exercises
                + props.course.parts[1].exercises
                + props.course.parts[2].exercises

  return(
    <div>
    <p>Number of exercises total: {total}
    </p>
    </div>
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
    <div>
      <Header course={course.name} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
