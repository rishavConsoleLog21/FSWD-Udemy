import { useState } from "react";

export default function ScoreKeeper({ numPlayers = 3, target = 5 }) {
  const [score, setScore] = useState(new Array(numPlayers).fill(0));
//   const addOne = (idx) => {
//     setScore(prevScore => {
//         const copy = [...prevScore];
//         copy[idx] +=1;
//         return copy;
//     });
//   };

//React Way to do it below
  const addOne = (idx) => {
    setScore(prevScore => {
       return prevScore.map((score, i) => {
        if (i === idx) return score + 1;
            return score;
       });
    })
  };

  const reSet = () => {
    setScore(new Array(numPlayers).fill(0))
  };

  return (
    <div>
      <h1>Score Keeper</h1>
      <ul>
        {score.map((score, idx) => {
          return (
            <li key={idx}>
              Player {idx + 1}: {score}
              <button onClick={() => addOne(idx)}>+1</button>
                {score >= target && "Winner!"}
            </li>
          );
        })}
      </ul>
      <button onClick={reSet}>Reset Game</button>
    </div>
  );
}
