function handleClick() {
    console.log("Clicked the button")
}

export default function Clicker() {
    return (
        <div>
            <p>Click the button</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}