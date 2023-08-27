import './App.css'
import LuckyN from './LuckyN'

function App() {
  return (
    <div>
      <LuckyN />
      <LuckyN numDice={3} goal={11}/>
    </div>
  )
}

export default App
