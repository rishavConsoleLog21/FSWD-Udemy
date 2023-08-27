import { useState } from "react";
import {getRolls } from "./utils"
import Dice from "./Dice";
import Button from "./Button";

function LuckyN({title="Dice Game", numDice=2, winCheck}) {
    const [dice, setDice] = useState(getRolls(numDice))
    const isWinner = winCheck(dice);
    const roll = () => setDice(getRolls(numDice));
    return (
        <main className="LuckyN">
            <h1>{title}{winCheck} {isWinner ? "🥳You Win!!🥳" : "Keep Trying!!"}</h1>
            {isWinner && <h2>Congrats!</h2>}
            <Dice dice={dice}/>
            {/* <button onClick={roll}>Re-Rolls Dice</button> */}
            <Button clickFunc={roll} label="Re-Roll"/>
        </main>
    )
}

export default LuckyN;