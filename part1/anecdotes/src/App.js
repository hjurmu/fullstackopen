import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick = { handleClick }>
    {text}
  </button>
)

const Anecdote = ({heading, anecdote, votes}) => (
  <> 
    <h2>{heading}</h2>
    <p>{anecdote} <br/> has {votes} votes</p>
  </>
  
)
  

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes ,setVotes] = useState(Array(anecdotes.length).fill(0))

  const bestAnecdote = Object.keys(votes).sort((i, j) => votes[j] - votes[i])[0]

  const handleNextClick = () => {
    const rand = Math.floor(Math.random() * (anecdotes.length))
    setSelected(rand)
  }

  const handleVoteClick = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }

  return (
    <div>
      <Anecdote heading='Anecdote of the day' anecdote={anecdotes[selected]} votes={votes[selected]}/>
      <Button handleClick={handleVoteClick} text='vote' />
      <Button handleClick={handleNextClick} text='next anecdote'/>
      <Anecdote heading='Anecdote with most votes' anecdote={anecdotes[bestAnecdote]} votes={votes[bestAnecdote]}/>
    </div>
    
  )
}

export default App
