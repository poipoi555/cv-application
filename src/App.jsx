import { useState } from 'react'
import General from './components/General.jsx'
import Education from './components/Education.jsx'
import Practical from './components/Practical.jsx'
import './App.css'

function App() {
  return (
    <div>
      <h1>My CV Application</h1>
      <General />
      <Education />
      <Practical />
    </div>
  );
}

export default App
