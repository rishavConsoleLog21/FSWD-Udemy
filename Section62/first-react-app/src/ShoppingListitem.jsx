function ShoppingListitem({item, quantity, completed}) {
    const styles = {
        color: completed ? "green" : "red",
        textDecoration: completed ? "line-through" : "none"
    }
    return (
        <li style={styles}>
            {item} - {quantity}
        </li>
    )
}

export default ShoppingListitem;

{/* <li 
            key={i.id}
            style={{
            color: i.completed ? "grey" : "red", 
            textDecoration: i.completed ? "line-through" : "none"}}>
            {i.Name} - {i.quantity}
</li> */}