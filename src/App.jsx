import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import SearchFilters from './components/SearchFilters '
import CardSection from './components/CardSection'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <SearchFilters />
        <CardSection />
        <Footer /> 
      </div>
    </>
  )
}

export default App
