import { useState, useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(0)
    useEffect(function myEffect() {
        console.log("My effect was called")
    })
    const increment = () => {
        setCount((c) => c+1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+1</button>
        </div>
    )
}