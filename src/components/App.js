import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Item from "./Item";
import Stats from "./Stats";

// const initialItems = [
//   {
//     id: 1,
//     description: "Passports",
//     quantity: 2,
//     packed: false,
//   },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Mascara", quantity: 2, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]); // sau initial items!

  // const [numItems, setNumItems] = useState(0); // bad approach

  function handleAddItems(item) {
    setItems((items) =>
      // not items push!! immutability
      [...items, item]
    );
    // setNumItems((num) => num + 1);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onDeleteList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
