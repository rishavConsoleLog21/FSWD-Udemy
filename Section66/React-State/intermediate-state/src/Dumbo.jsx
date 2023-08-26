import { useState} from "react" ;

function generateGameBoard() {
    console.log("making the intial game board")
    return Array(500);
}

export default function Dumbo() {
    const [board, setBoard] = useState(generateGameBoard);
    return (
        <button onClick={() => setBoard('Hello')}>Click me to channge state</button>
    )
}