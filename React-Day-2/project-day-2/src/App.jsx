import { useState } from 'react'

import './App.css'
import UserCard from './components/UserCard'
import './components/UserCard';


function App() {
  

  return (
    <div className='container'>
      <UserCard name="Harsh"/>
      <UserCard name="Agarwal" />
      <UserCard name="Engineer" />
    </div>
  )
}

export default App
