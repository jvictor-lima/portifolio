import { useState } from 'react'
import './App.css'
import Cabecalho from './components/Cabecalho'
import Main from './components/Main'
import Footer from './components/Footer'

export default function App() {
  const [count, setCount] = useState(0)
 

  return (
    <>
     <Cabecalho/>
     <Main/>
     <Footer/>
    </>
  )
}


