import { useState } from 'react'
import { Routes,Route,BrowserRouter } from 'react-router-dom'
 import Home from './Pages/Home'
import AddProduct from './Pages/AddProduct'
import EditProduct from './Pages/EditProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
       <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<AddProduct />} />
                  <Route path="/edit/:id" element={<EditProduct />} /> {/* id parameter */}

            </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
