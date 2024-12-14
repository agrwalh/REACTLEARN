import { useState } from 'react'

import './App.css'
import UserCard from './components/UserCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserCard />
    <UserCard />
    <UserCard />
    
      </>
  )
}

export default App
