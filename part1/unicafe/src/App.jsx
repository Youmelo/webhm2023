import { useState } from 'react'

const Header = ({title}) => {
  return <h1>{title}</h1>
}
const Button = ({handleClick,text}) => {
  return <button onClick={handleClick}> {text} </button>
}
const Displaynumber = ({name,number}) => {
  return (
      <tr>
        <td>{name}</td>
        <td>{number}</td>
      </tr>
        )
}
const Statistics = (props) => {
  console.log(props)
  if(props.stata[3].data == 0){
    return <h2> No feedback given</h2>
  }
  else{
     return (
  <table>
  <Displaynumber name = {props.stata[0].name} number = {props.stata[0].data} />
  <Displaynumber name = {props.stata[1].name} number = {props.stata[1].data} />
  <Displaynumber name = {props.stata[2].name} number = {props.stata[2].data} />
  <Displaynumber name = {props.stata[3].name} number = {props.stata[3].data} />
  <Displaynumber name = {props.stata[4].name} number = {props.stata[4].data} />
  <Displaynumber name = {props.stata[5].name} number = {props.stata[5].data} />
  </table>
  )
  }
  // ...
}
const App = () => {
  // save clicks of each button to its own state
    //设置state
  const title1 = 'give feedback'
  const title2 = 'statistics' 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGoodClick = () => setGood(good + 1)
  const handleBadClick = () => setBad(bad + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const all = good + neutral + bad
  const stata = [
    {
      name:'good',
      data:good
    },
    {
      name: 'neutral',
      data: neutral
    },
    {
       name: 'bad',
       data: bad
    },
    {
      name:'all',
      data:all
    },
    {
      name: 'average',
      data: (good*1 + neutral*0 +bad*-1)/all
    },
    {
       name: 'positive',
       data: String(good/all*100)+'%'
    }
  ]

  return (
    <div>
      <Header title = {title1}/>
      <Button handleClick={handleGoodClick} text ='good'/>
      <Button handleClick={handleNeutralClick} text ='neutral'/>
      <Button handleClick={handleBadClick} text ='bad'/>

      <Header title = {title2}/>
      <Statistics stata = {stata}/>
      
    </div>
  )
}

export default App