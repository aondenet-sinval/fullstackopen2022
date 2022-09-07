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
  return(
    <p>Number of exercises total {props.parts}</p>
  )
}
const Course = (props) =>{
  const {course} = props;
  return (
    <div>
    <Header course={course.name} />
    <Content course={course} />
    <Total parts={course.parts[0].exercises + course.parts[1].exercises
    + course.parts[2].exercises} />
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

  return<Course course={course} />
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
