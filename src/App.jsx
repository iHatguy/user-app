import { useState } from 'react'
import BrandNameNav from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrandNameNav />
      <Footer />
    </>
  )
}

export default App
