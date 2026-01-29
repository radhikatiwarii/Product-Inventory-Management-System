import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import ProductList from './Components/ProductList'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Home />
      </BrowserRouter>

    </>
  )
}

export default App
