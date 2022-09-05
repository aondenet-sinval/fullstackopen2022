import React, { useState } from 'react'
const Button = (props) => <button onClick={props
                              .handlerClick}>{props
                                .name}</button>
const StatisticsLine = (props) => {

    return(
      <div>
        {props.text} {props.value} {props.percent}
      </div>
    )
}

const Statistics = (props) => {
  const {good, neutral, bad, total, percentGood} = props
  if (total > 0) {
    return(
      <div>
      <table>
      <tbody>
      <tr>
        <td><StatisticsLine text="good"/></td>
        <td><StatisticsLine value={good} /></td>
      </tr>
      <tr><td><StatisticsLine text="neutral"/></td><td><StatisticsLine value={neutral} /></td></tr>
      <tr><td><StatisticsLine text="bad"/></td><td><StatisticsLine value={bad} /></td></tr>
      <tr><td><StatisticsLine text="Average" /></td><td><StatisticsLine value={total} /></td></tr>
      <tr><td><StatisticsLine text="Positive" /></td><td><StatisticsLine value={percentGood} percent="%" /></td></tr>
      </tbody>
      </table>
      </div>
    )
  } else {
    return <div>No give statistc</div>
  }

}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const percentGood = Number.isNaN(good / total) ? 0 : good / total * 100

  return (
    <div id="app">
      <h1>Give feedback:</h1>
      <Button handlerClick={() => setGood(good + 1)} name="good" />
      <Button handlerClick={() => setNeutral(neutral + 1)} name="neutral" />
      <Button handlerClick={() => setBad(bad + 1)} name="bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} percentGood={percentGood} />
    </div>
  )
}

export default App
