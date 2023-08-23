export default function DoubleDie() {
    const num1 = Math.floor(Math.random() * 4) + 1; 
    const num2 = Math.floor(Math.random() * 4) + 1; 
    return (
        <div>
            <h2>Double Dice Game</h2>
            {num1 === num2 && <h3>You Win :)</h3>}
            <p>num1: {num1}</p>
            <p>num2: {num2}</p>
        </div>
    )
}

// export default function DoubleDie() {
//     const num1 = Math.floor(Math.random() * 4) + 1; 
//     const num2 = Math.floor(Math.random() * 4) + 1; 
//     return (
//         <div>
//             <h2>Double Dice Game</h2>
//             {num1 === num2 ? <h3>You Win:)</h3> : null }
//                <p>num1: {num1}</p>
//                <p>num2: {num2}</p>
//         </div>
//     )
// }

// export default function DoubleDie() {
//     const num1 = Math.floor(Math.random() * 4) + 1; 
//     const num2 = Math.floor(Math.random() * 4) + 1; 
//     return (
//         <div>
//             <h2>{num1 === num2 ? "You Win :)" : "You Lose :(" }</h2>
//             <p>num1: {num1}</p>
//             <p>num2: {num2}</p>
//         </div>
//     )
// }