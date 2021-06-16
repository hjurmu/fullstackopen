import React, { useState } from "react";

const Header = ({ text }) => (<h1>{text}</h1>)

const Button = ({ handleClick, text }) => (
  <button onClick = { handleClick }>
    {text}
  </button>
)

const Stat = ({ text, value }) => (
    <>{ text } { value } </>
)

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good * 1 + neutral * 0 +  bad * -1 ) / all
  const goodPercentage = `${good / all * 100} %`

  return (
    <p>
        <Stat text='good' value={good} /><br/>
        <Stat text='neutral' value={neutral} /><br/>
        <Stat text='bad' value={bad} /><br/>
        <Stat text='all' value={good + neutral + bad} /><br/>
        <Stat text='average' value={average} /><br/>
        <Stat text='positive' value={goodPercentage} /> 
    </p>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  const handleGoodClick = () => setGood(good + 1)

  const handleNeutralClick = () => setNeutral(neutral + 1)

  const handleBadClick = () => setBad(bad + 1)

  

  return (
    <div>
      <Header text='give feedback'/>
      <Button handleClick = { handleGoodClick } text='good' />
      <Button handleClick = { handleNeutralClick } text='neutral' />
      <Button handleClick = { handleBadClick } text='bad' />
      <Header text='statistics' />
      <Statistics good = { good } neutral = { neutral } bad = { bad } />
    </div>
  )
}

export default App;
