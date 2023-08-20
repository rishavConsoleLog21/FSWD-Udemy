import { useState } from 'react'
import RandomPokemon from "./RandomPokemon"
import './App.css'

function App() {
  return (
    <>
      <h1>Guess The Pokemon ?</h1>
      <div>
        <RandomPokemon/>
      </div>
    </>
  )
}

export default App
