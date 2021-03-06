import React from 'react'

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Header = ({course}) => {
  return (
    <h2>{course.name}</h2>
  )
}

const Content = ({course}) => {
  return (
    <div>
      {course.parts.map(part => <Part key={part.id} part={part}/>)}
    </div>
  )
}

const Total = ({course}) => {
  const sum = course.parts.reduce((accumulator, currentValue) => (
    accumulator + currentValue.exercises
  ), 0)

  return (
    <p>Number of exercises {sum}</p>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default Course