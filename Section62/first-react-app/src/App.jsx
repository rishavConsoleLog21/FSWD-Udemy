import { useState } from 'react'
import RandomPokemon from "./RandomPokemon"
import Greeter from './Greeter'
import './App.css'

function App() {
  return (
    <>
      <h1>Guess The Pokemon ?</h1>
      <div>
        <Greeter person="Rishav" />
        {/* <RandomPokemon/> */}
      </div>
    </>
  )
}

export default App
