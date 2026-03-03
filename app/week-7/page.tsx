"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import ItemsData from "./items.json";
export default function Page() {
  const [items, setItems] = useState(ItemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleItemSelect = (item: any) => {
    let cleanedName = item.name.split(",")[0].trim().toLowerCase();

    cleanedName = cleanedName.replace(/[^a-z\s]/g, "").trim();

    if (cleanedName.endsWith("s")) {
      cleanedName = cleanedName.slice(0, -1);
    }

    setSelectedItemName(cleanedName);
  };

  const handleAddItem = (newItem: any) => {
    setItems([...items, newItem]);
  };
  return (
    <main className="flex justify-center px-20 p-4 bg-zinc-900">
      <div className="flex flex-col">
        <h1 className="font-bold text-2xl ">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-1/3">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
