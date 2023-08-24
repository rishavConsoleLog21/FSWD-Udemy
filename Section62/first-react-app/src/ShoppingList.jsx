import ShoppingListitem from "./ShoppingListitem"
export default function ShoppingList({items}) {
return (
    <ul>
        {items.map((i) => (
        <ShoppingListitem
            key={i.id}
            item={i.item} 
            quantity={i.quantity} 
            completed={i.completed}/>
        // <ShoppingListitem key={i.id} {...i}/>
        //above is the spread operator
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