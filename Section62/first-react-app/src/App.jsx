import './App.css'
import { useState } from 'react'
import RandomPokemon from "./RandomPokemon"
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'
import DoubleDie from './DoubleDie'
import Heading from './Heading'
import ColorList from './ColorList'
import ShoppingList from './ShoppingList'

const data = [
  { Name: "egg", quantity: 12, completed: false},
  { Name: "milk", quantity: 2, completed: true},
  { Name: "chicken breasts", quantity: 6, completed: false},
  { Name: "carrots", quantity: 5, completed: true},
  { Name: "capsicum", quantity: 2, completed: false}
]

function App() {
  return (
    <div>
      <ShoppingList items={data}/>
      {/* <Heading color="magenta" text="Welcome!!" fontSize="48px"/>
      <Heading color="magenta" text="User" fontSize="20px"/>
      <DoubleDie/>
      <DoubleDie/>
      <DoubleDie/>
      <ColorList colors={["red","pink","purple","teal"]}/>
      <ListPicker values={[1,2,3]}/>
      <ListPicker values={["a","b","c"]}/>
      <h1>Guess The Pokemon ?</h1>
      <Greeter person="Rishav" from="blue"/>
      <Greeter />
      <RandomPokemon/>
      <Die numSides={20}/>
      <Die numSides={10}/>
      <Die numSides={6}/> */}
      </div>
  );
}

export default App;
