import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Wrapper from './components/Wrapper'

function App() {
  const [count, setCount] = useState(0)

 
    return (
      <>
        <h1>App-1 (Host)</h1>
        <Wrapper/>
      </>
    )
}

export default App
