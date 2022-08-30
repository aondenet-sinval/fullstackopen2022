import React, { useState } from 'react'

const Feedback = () => {
  const [step, setStep] = useState({
    good: 0, neutral: 0, bad: 0
  })
const { good, neutral, bad } = step
const Good = () => {
  const newGood = {
    ...step,
    good: step.good + 1
  }
setStep(newGood)
}
const Neutral = () => {
  const newNeutral = {
    ...step,
    neutral: step.neutral + 1
  }
setStep(newNeutral)
}
const Bad = () => {
  const newBad = {
    ...step,
    bad: step.bad + 1
  }
setStep(newBad)
}
const total = good + neutral + bad
const percentualPositivo = total / 100 * good
  return(
    <div>
      <h1>Por favor, registre sua opnião sobre nossos serviços<br />
        clicando no botão abaixo:</h1>
      <button onClick={Good}>Good</button>
      <button onClick={Neutral}>Neutral</button>
      <button onClick={Bad}>Bad</button>
      <h3>Feedack:</h3>
      <button>Bom: {good}</button>
      <button>Neutral: {neutral}</button>
      <button>Bad: {bad}</button>
      <p>Total feedback: {total}</p>
      <p>Comentários positivo: {percentualPositivo} %</p>
    </div>
  )

}

export default Feedback;
