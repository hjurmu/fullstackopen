import React, { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick = { handleClick }>
    {text}
  </button>
)

const Statistic = ({ text, value }) => (
  <tr>
    <td>{ text }</td>
    <td>{ value }</td>
  </tr>
)

const Statistics = ({good, neutral, bad}) => {

  const all = good + neutral + bad
  const average = (good * 1 + neutral * 0 +  bad * -1 ) / all
  const goodPercentage = good / all * 100 + ' %'

  if (good > 0 || neutral > 0 || bad > 0) {
    return (
      <>
        <table>
          <Statistic text='good' value={good} />
          <Statistic text='neutral' value={neutral} />
          <Statistic text='bad' value={bad} />
          <Statistic text='all' value={good + neutral + bad} />
          <Statistic text='average' value={average} />
          <Statistic text='positive' value={goodPercentage} />
        </table>
      </>
    )
  }
  return (
    <>
      <p>No feedback given</p>
    </>
    
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
      <h1>give feedback</h1>
      <Button handleClick = { handleGoodClick } text='good' />
      <Button handleClick = { handleNeutralClick } text='neutral' />
      <Button handleClick = { handleBadClick } text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
