import { useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Translate from './page/Translate'
import  "./App.css"
function App() {
  return (
    <>
    <Nav/>
    <div className="Continar Layout">
        <Translate/>
    </div>
    </>
  )
}

export default App
