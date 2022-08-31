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
const percentGood = good / total * 100
  return(
    <div>
      <h1>Por favor, registre sua opnião sobre nossos serviços<br />
        clicando no botão abaixo:</h1>
      <button onClick={Good}>Bom</button>
      <button onClick={Neutral}>Neutro</button>
      <button onClick={Bad}>Ruim</button>
      <h3>Feedack:</h3>
      <button>Bom: {good}</button>
      <button>Neutro: {neutral}</button>
      <button>Ruim: {bad}</button>
      <p>Total feedback: {total}</p>
      <p>Comentários positivo: {Number.isNaN(percentGood) ? 0 : percentGood} %</p>
    </div>
  )

}

export default Feedback;
