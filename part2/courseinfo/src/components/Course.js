import React from 'react'

const Header = ({courses}) =>{
  return(
    <h3>{courses}</h3>
  )
}

const Part = props => <p>{props.course}: {props.exercise}</p>

const Content = (props) =>{
  const frontend = props.courses[0]
  const backend = props.courses[1]
  let totalFrontend = 0;
  for (let i = 0; i < 4; i++) {
      totalFrontend  += frontend.parts[i].exercises;
  }
  let totalBackend = 0;
  for (let i = 0; i < 2; i++) {
      totalBackend  += backend.parts[i].exercises;
  }

  return(
    <div>
    <Header courses={frontend.name} />
    <Part course={frontend.parts[0].name}
      exercise={frontend.parts[0].exercises} />
    <Part course={frontend.parts[1].name}
      exercise={frontend.parts[1].exercises} />
    <Part course={frontend.parts[2].name}
      exercise={frontend.parts[2].exercises} />
    <Part course={frontend.parts[3].name}
      exercise={frontend.parts[3].exercises} />
    <b>Number exercises total: {totalFrontend}.</b>
    <Header courses={backend.name} />
    <Part course={backend.parts[0].name}
      exercise={backend.parts[0].exercises} />
    <Part course={backend.parts[1].name}
      exercise={backend.parts[1].exercises} />
    <b>Number exercises total: {totalBackend}.</b>
    </div>
  )
}

const Course = ({courses}) =>{
  return (
    <div>
    <h1>Web development curriculum</h1>
    <Content courses={courses}/>

    </div>
  )
}

export default Course;
