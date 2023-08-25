function handleFormSubmit(evt) {
    evt.preventDefault();
    console.log("Submitted the form!!");
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    )
}