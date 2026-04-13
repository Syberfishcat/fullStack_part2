const Header = (props) => <h3>{props.name}</h3>

const Content = (props) => {
  return (
    <div>
      {props.parts.map(part => <Part part = {part} key = {part.id}/>)}
    </div>
  )
}

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => {
  const total = props.parts.reduce((total, current) => total + current.exercises, 0)
  return <p><b>total of {total} exercises</b></p>
}

const Course = ({course}) => {
  return (
    <div>
      <Header name = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}

export default Course