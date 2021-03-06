import React, { useState } from 'react'
import ReactDOM from 'react-dom';

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = (props) => (
  <button onClick = {props.handleClick}>{props.text}</button>
)

const Display = props => <div>{props.value}</div>

const App = () => {
  const [value, setValue] = useState(10)
  
  const hello = (who) => () => { 
      console.log('hello', who) 
    }

  const setToValue = (newValue) => {
    setValue(newValue)
  }

  const logClick = () => {
    console.log('clicked the button')
  }

  const resetState = () => {
    setValue(0)
  }

  const handleClick = () => {
    logClick()
    resetState()
  }
    
  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);