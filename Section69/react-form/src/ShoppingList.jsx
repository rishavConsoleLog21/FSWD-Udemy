import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";
export default function ShoppingList() {
    const [items, setItems] = useState([
        {id: 1, product: "Banana", quantity: 8},
        {id: 2, product: "Egg", quantity: 12},
    ]);
    const addItem = (item) => {
        setItems((currItems) => {
            return [...currItems, {...item, id: 9}];
        });
    };
    return (
        <div>
            <h1>Shopping list</h1>
            <ul>
                {items.map((i) => (
                    <li key={i.id}>
                        {i.product} - {i.quantity}
                    </li>
                ))}
            </ul>
            <ShoppingListForm addItem={addItem}/>
        </div>
    )
}