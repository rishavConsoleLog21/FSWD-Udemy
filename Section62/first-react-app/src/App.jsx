import './App.css'
import { useState } from 'react'
import RandomPokemon from "./RandomPokemon"
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'
import DoubleDie from './DoubleDie'


function App() {
  return (
    <div>
      <DoubleDie/>
      <DoubleDie/>
      <DoubleDie/>
      {/* <ListPicker values={[1,2,3]}/>
      <ListPicker values={["a","b","c"]}/> */}
      {/* <h1>Guess The Pokemon ?</h1>
      <Greeter person="Rishav" from="blue"/>
      <Greeter /> */}
      {/* <RandomPokemon/> */}
        {/* <Die numSides={20}/>
        <Die numSides={10}/>
        <Die numSides={6}/> */}
      </div>
  );
}

export default App;
