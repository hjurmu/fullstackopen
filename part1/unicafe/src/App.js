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

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    setAll(all + 1)
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setAll(all + 1)
    setBad(bad + 1)
  }

  const countAverage = () => {
    if (all === 0) {
      return 0
    }
    return (
      (good * 1 + bad * -1 )/ all
    )
  }

  const countPercentage = (numerator, denominator) => 
  (numerator/denominator * 100)

  return (
    <div>
      <Header text='give feedback'/>
      <Button handleClick = { handleGoodClick } text='good' />
      <Button handleClick = { handleNeutralClick } text='neutral' />
      <Button handleClick = { handleBadClick } text='bad' />
      <Header text='statistics' />
      <p>
        <Stat text='good' value={good} /><br/>
        <Stat text='neutral' value={neutral} /><br/>
        <Stat text='bad' value={bad} /><br/>
        <Stat text='all' value={all} /><br/>
        <Stat text='average' value={countAverage()} /><br/>
        <Stat text='positive' value={countPercentage(good, all)} /> %
      </p>
      
    </div>
  )
}

export default App;
