export default function ClickerEx({buttonText, message}) {
    const handleClick = () => {
        alert(message);
    }
    return (
        <button onClick={handleClick}>{buttonText}</button>
    )
}