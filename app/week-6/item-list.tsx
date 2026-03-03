"use client";
import Item from "./item";
import { useState } from "react";
 
 
export default function ItemList({ items } : {items: any}) {
  const [sortBy, setSortBy] = useState("name");
  const itemsCopy = [...items];
  if (sortBy === "name") {
    itemsCopy.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category" || sortBy === "categoryList") {
    itemsCopy.sort((a, b) => a.category.localeCompare(b.category));
  }
 
  const categories: string[] = itemsCopy.map((item) => item.category);
  const categoryList: string[] = [...new Set(categories)].sort((a, b) =>
    a.localeCompare(b)
  );

return (
    <div>
      <div className="flex justify-center rounded-sm bg-gray-800 p-2 gap-8 mt-3">
        <button
          className={`border-2 rounded-sm text-center p-1 ${sortBy === "name" ? "bg-gray-500" : "bg-green-700"}`}
          onClick={() => setSortBy("name")}
        >
          Sort By Name
        </button>
        <button
          className={`border-2 rounded-sm text-center p-1 ${sortBy === "category" ? "bg-gray-500" : "bg-green-700"}`}
          onClick={() => setSortBy("category")}
        >
          Sort By Category
        </button>
        <button
          className={`border-2 rounded-sm text-center p-1 ${sortBy === "categoryList" ? "bg-gray-500" : "bg-green-700"}`}
          onClick={() => setSortBy("categoryList")}
        >
          Sort By Both
        </button>
      </div>
      <div className="rounded-sm bg-gray-800 p-2 mt-3">
        {sortBy === "categoryList" ? (
          categoryList.map((categoryList, index) => (
            <div key={index}>
              <h1 className="capitalize m-2">{categoryList}</h1>
              {itemsCopy.map((item, index) => (
                item.category === categoryList ? (
                  <div key={index}>
                    <Item
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                    />
                  </div>
                ) : ("")
              ))}
            </div>
          ))
        ) : (
          itemsCopy.map((item, index) => (
            <div key={index}>
              <Item
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
