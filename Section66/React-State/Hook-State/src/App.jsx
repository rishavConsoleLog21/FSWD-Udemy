import './App.css'
import Counter from './Counter'
import Toggler from './Toggler'
import ToggleCounter from './ToggleCounter'
import ColorBox from './ColorBox'
import ColorBoxes from './ColorBoxes'
const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];

function App() {
  return (
   <div className='ColorBoxes'>
    <ColorBoxes colors={colors}/>
    {/* <ColorBox colors={colors}/>
    <ToggleCounter />
    <Toggler />
    <Counter/> */}
   </div>
  )
}

export default App
