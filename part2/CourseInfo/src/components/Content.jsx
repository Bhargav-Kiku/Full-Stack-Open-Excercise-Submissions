const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Content = (props) => (
  <div>
    {props.parts.map(part => 
      <Part key = {part.id} part = {part} />
    )}
  </div>
)

export default Content