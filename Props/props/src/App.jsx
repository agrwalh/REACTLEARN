import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../src/components/Card';
import Button from '../src/components/Button'

function App() {
  const[count,setCount]=useState(0);
  function handleClick(){
    setCount(count+1);
  }
  
  return (
    
      <div>
        <Button incrementCount={handleClick} text="Click Me" />
        <h1> {count}</h1>
        {/* <Card name="Harsh">
          <h1>Best</h1>
          <p>I am hardworking</p>
          <p>VEry much</p>
        </Card> */}

      </div>
    
  )
}

export default App
