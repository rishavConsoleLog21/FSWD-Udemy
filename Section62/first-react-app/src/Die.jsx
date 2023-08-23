export default function Die({ numSides }) {
    const roll = Math.floor(Math.random() * numSides) + 1;
    return (
        <>
        <p>{numSides}-Sided Die roll: {roll}</p>
        </>
    )
}