import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import useSound from 'use-sound';
import trueno from './assets/sonidos/trueno.mp3'


function App() {
  const [playSound] = useSound(trueno);

  return (
    <div className='App'>
      <button onClick={playSound}>Sonar</button>
    </div>
  )
}

export default App
