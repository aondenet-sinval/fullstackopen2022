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
    // copy anedocte
    setVoteAnedocte( [...voteAnedocte, voteAnedocte[selected][1] += 1] );

  }
  //definition has voted
  let a = voteAnedocte[0][1];
  let b = voteAnedocte[1][1];
  let c = voteAnedocte[2][1];
  let d = voteAnedocte[3][1];
  let e = voteAnedocte[4][1];
  let f = voteAnedocte[5][1];
  let max = Math.max(a,b,c,d,e,f);
//return has voted
const Anedocte = () => {
  let upAnedocte = voteAnedocte[0][0];
  for (var i = 0; i < 6; i++)
  if (voteAnedocte[i][1] === max) {
    upAnedocte = voteAnedocte[i][0];
  }
  if (max > 0) {
    return(
      <div>
      <h1>Anedocte with most votes</h1>
        <p>{upAnedocte}</p>
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
      <p>{voteAnedocte[selected][0]}</p>
      <p>{voteAnedocte[selected][1]}</p>
      <button onClick={addVote}>votes</button>
      <button onClick={updateAnedocte}>Next Anedocte</button>

      <Anedocte />
      <p>has {max} votes</p>
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
