import Slots from './Slots'
import './App.css'
import Clicker from './Clicker'
import Form from './Form'
import ClickerEx from './ClickerEx'

function App() {
  
  return (
   <div>
    <ClickerEx message="Hi!!!" buttonText="Please Click Me"/>
    <ClickerEx message="Stop Clicking Me" buttonText="Dont Click Me"/>
    {/* <Form />
    <Slots val1="🍒" val2="🍒" val3="🍒"/>
    <Clicker /> */}
   </div>
  )
}

export default App
