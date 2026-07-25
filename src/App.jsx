import React from 'react'
import Header from './components/Header'
import Deposito from './components/Deposito'
import { Routes , Route } from 'react-router-dom'
import Kredit from './components/Kredit'
import './index.css'



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Kredit/>}/>
        <Route path="/deposito" element={<Deposito />}/>
      </Routes>
    </div>
  )
}

export default App;