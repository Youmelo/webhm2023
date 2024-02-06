import { useState } from 'react'

const Button = (props) => {
  return <button onClick = {props.handleClick}> {props.text} </button>
}
const Header = ({title}) => {
  return <h1>{title}</h1>}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  var pointsArray = new Uint8Array(anecdotes.length); 
  const [selected, setSelected] = useState(0)
  const [points,setPoints] = useState(pointsArray)
  var value = 0
  const handleNextClick = () => {
    value = Math.floor(Math.random() * anecdotes.length)
    console.log (value)
    setSelected(value)
  }
  const handleVoteClick = () =>{
    console.log(selected)//state可以在全局调用，不需要传输
    var newArray =[...points]
    newArray[selected] += 1
    setPoints(newArray)
  }
  const mostVoted = (anecdotes) => {
    console.log(anecdotes)
    console.log(points)
    const indexOfMax = points.indexOf(Math.max(...points))
    return [anecdotes[indexOfMax],points[indexOfMax]]
  }
  var mostVotes = mostVoted(anecdotes) 
  return (
    <div>
      <Header title = 'Anecdote of the day'/>
      {anecdotes[selected]}
      <Button handleClick = {handleNextClick} text = 'next anecdote'/> 
      <Button handleClick = {handleVoteClick} text = 'vote'/>
      <Header title = 'Anecdote with most votes'/>
      <div>{mostVotes[0]}</div>
      <div>has {mostVotes[1]} votes</div>
    </div>
  )
}

export default App