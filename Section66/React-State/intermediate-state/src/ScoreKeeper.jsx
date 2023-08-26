import { useState } from "react";

export default function ScoreKeeper() {
    const [scores, setScores] = useState({p1Score: 0, p2Score: 0});
    function incrementP1Score() {
        setScores((oldScore) => {
            return {...oldScore, p1Score: oldScore.p1Score + 1};
        });
    }
    function incrementP2Score() {
        setScores((oldScore) => {
            return {...oldScore, p2Score: oldScore.p2Score + 1};
        });
    }
    return (
        <div>
            <p>Player1: {scores.p1Score}</p>
            <p>Player2: {scores.p2Score}</p>
            <button onClick={incrementP1Score}>+1 player 1</button>
            <button onClick={incrementP2Score}>+1 player 2</button>
        </div>
    )
}

