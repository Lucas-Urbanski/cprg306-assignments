"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import ItemsData from "./items.json";
export default function Page() {
  const[items, setItems] = useState(ItemsData)

  const handleAddItem = ( newItem: any) => {
    setItems([...items, newItem]);
  }
  return (  
    <main className="px-20">
      <h1 className="font-bold text-2xl mt-4">Shopping List</h1>
      <NewItem onAddItem={handleAddItem}/>
      <ItemList items={items}/>
    </main>
  );
}
