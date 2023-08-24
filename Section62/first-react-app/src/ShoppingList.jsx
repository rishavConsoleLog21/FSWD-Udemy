export default function ShoppingList({items}) {
return (
    <ul>
        {items.map((i) => (
        <li style={{
            color: i.completed ? "grey" : "red", 
            textDecoration: i.completed ? "line-through" : "none"}}>
            {i.Name} - {i.quantity}
        </li>
        ))}
    </ul>
)
}


// const data = [
//     { item: "egg", quantity: 12, completed: false},
//     { item: "milk", quantity: 2, completed: true},
//     { item: "chicken breasts", quantity: 6, completed: false},
//     { item: "carrots", quantity: 5, completed: true},
//     { item: "capsicum", quantity: 2, completed: false}
//   ]