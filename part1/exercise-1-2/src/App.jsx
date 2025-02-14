const Header = (props) =>{
  return(
      <>
       <h1>{props.course}</h1>
      </>
  )
}

const Content = (props) => {
  return(
    <>
     <Part part={props} index={0}/>
     <Part part={props} index={1}/>
     <Part part={props} index={2}/>
    </>
  )
}

const Part = (props) => {
  console.log(props)
  return(
    <>
       <p>
        {props.part.parts[props.index]} {props.part.exercises[props.index]}
      </p>
    </>
  )
}

const Footer = (props) =>{
  return(
    <>
    <p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 12
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
     <Header course={course}/>
     <Content parts={[part1,part2,part3]} exercises={[exercises1,exercises2,exercises3]}/>
      <Footer exercises={[exercises1,exercises2,exercises3]} />
    </div>
  )
}

export default App