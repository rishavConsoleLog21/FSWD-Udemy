export default function ListPicker({ values }) {
    const randIndex = Math.floor(Math.random() * values.length);
    const randElement = values[randIndex];
    return (
        <div>
            <p>The list of values are: {values} </p>
            <p>And Here is your Random Element: {randElement}</p>
        </div>
    )
}