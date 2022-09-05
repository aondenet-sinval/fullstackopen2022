import './index.css';
import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';

const App = (props) => {
  const { anedoctes } = props;
  const [selected, setSelected] = useState(0);
  const [voteAnedocte, setVoteAnedocte] = useState(
    [
      [anedoctes[0], 0],
      [anedoctes[1], 0],
      [anedoctes[2], 0],
      [anedoctes[3], 0],
      [anedoctes[4], 0],
      [anedoctes[5], 0]
    ]
  );
    //create number aleactory
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const updateAnedocte = () => {
      setSelected(getRandomInt(0,5));
    }

  const addVote = () => {
    // const copyAnedocte = [ ...voteAnedocte]
    setVoteAnedocte( [...voteAnedocte, voteAnedocte[selected][1] += 1] );
  }
  console.log(voteAnedocte[selected][0]);
  return(
    <div>
      <p>{voteAnedocte[selected][0]}</p>
      <p>{voteAnedocte[selected][1]}</p>
      <button onClick={addVote}>votes</button>
      <button onClick={updateAnedocte}>Next Anedocte</button>
    </div>
  )
}

const anedoctes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App anedoctes={anedoctes} />);
