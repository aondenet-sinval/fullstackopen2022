import './index.css';
import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';

const App = (props) => {
  const { anecdotes } = props;
  const [selected, setSelected] = useState(0);
  const [voteAnecdote, setVoteAnecdote] = useState(
    [
      [anecdotes[0], 0],
      [anecdotes[1], 0],
      [anecdotes[2], 0],
      [anecdotes[3], 0],
      [anecdotes[4], 0],
      [anecdotes[5], 0]
    ]
  );
    //create number aleactory
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const updateAnecdote = () => {
      setSelected(getRandomInt(0,5));
    }

  const addVote = () => {
    // copy anedocte
    setVoteAnecdote( [...voteAnecdote, voteAnecdote[selected][1] += 1] );

  }
//return has voted
const Anedocte = () => {
  console.log('teste');
  let a = voteAnecdote[0][1];
  let b = voteAnecdote[1][1];
  let c = voteAnecdote[2][1];
  let d = voteAnecdote[3][1];
  let e = voteAnecdote[4][1];
  let f = voteAnecdote[5][1];
  let max = Math.max(a,b,c,d,e,f);
  let upAnecdote = voteAnecdote[0][0];
  for (var i = 0; i < 6; i++)
  if (voteAnecdote[i][1] === max) {
    upAnecdote = voteAnecdote[i][0];
  }
  if (max > 0) {
    return(
      <div>
      <h1>Anedocte with most votes</h1>
        <p>{upAnecdote}</p>
        <p>has {max} votes</p>
      </div>
    )
  }else {
    return(
      <div>
        <p>No voted.</p>
      </div>
    )
  }

}

  return(
    <div>
      <h1>Anedocte of the day</h1>
      <p>{voteAnecdote[selected][0]}</p>
      <p>has {voteAnecdote[selected][1]} votes</p>
      <button onClick={addVote}>votes</button>
      <button onClick={updateAnecdote}>Next Anedocte</button>
      <Anedocte />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App anecdotes={anecdotes} />);
