import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Feedback from './feedback'

const App = () => {
  return(
    <div>
    <h1>App...</h1>
    <Feedback />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
