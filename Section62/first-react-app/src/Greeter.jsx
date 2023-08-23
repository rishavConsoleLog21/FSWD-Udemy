export default function Greeter({person="Everyone", from="Anonymous"}) {
    return (
        <>
        <h1>Hi There!!!{person}</h1>
        <h2>from-{from}</h2>
        </>
    )
}