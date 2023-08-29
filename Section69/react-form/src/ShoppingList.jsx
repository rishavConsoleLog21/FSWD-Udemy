import { useState } from "react";
import { v4 as uuid } from "uuid";
import ShoppingListForm from "./ShoppingListForm";
export default function ShoppingList() {
    const [items, setItems] = useState([
        {id: uuid(), product: "Banana", quantity: 8},
        {id: uuid(), product: "Egg", quantity: 12},
    ]);
    const addItem = (item) => {
        setItems((currItems) => {
            return [...currItems, {...item, id: uuid()}];
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