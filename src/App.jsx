import React from 'react'
import Header from './components/Header'
import Deposito from './components/Deposito'
import { Routes , Route } from 'react-router-dom'
import {useState} from 'react'
import Kredit from './components/Kredit'
import './index.css'



function App() {
  const [activeTab, setActiveTab] = useState('kredit');

  return (
    <div className="bg-slate-900 min-h-screen">
      <Header />
      <Routes>
        <Route path='/' element={<Kredit/>}/>
        <Route path="/deposito" element={<Deposito />}/>
      </Routes>
    </div>
  )
}

export default App;