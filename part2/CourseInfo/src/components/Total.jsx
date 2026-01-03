const Total = (props) => {
  console.log(props)
  const total = props.parts.reduce((sum, part) => {
    return sum + part.exercises
  }, 0)
  return (
    <p>
      <strong>Total of {total} exercises</strong>
    </p>
  )
}

export default Total