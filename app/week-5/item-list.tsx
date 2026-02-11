"use client";
import { useState } from "react";
import Item from "./item";
import Items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const categories: string[] = [];
  Items.forEach((item) => {
    categories.push(item.category);
  });
  const categoryList: string[] = [...new Set(categories)];

  if (sortBy === "name") {
    Items.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    Items.sort((a, b) => a.category.localeCompare(b.category));
  } else if (sortBy === "categoryList") {
    Items.sort((a, b) => a.category.localeCompare(b.category));
    categories.sort((a, b) => a.localeCompare(b));
  }

  return (
    <div>
      <div>
        {sortBy === "categoryList" ? (
          categoryList.map((categoryList, index) => (
            <div key={index}>
              <h1 className="capitalize m-2">{categoryList}</h1>
              {Items.map((item, index) => (
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
          Items.map((item, index) => (
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
      <div className="flex flex-row justify-center item-center gap-2 m-5">
        <button
          className={`border-2 rounded-lg ${sortBy === "name" ? "bg-gray-500 text-gray-400" : "text-wight-700"}`}
          onClick={() => setSortBy("name")}
        >
          {" "}
          Sort By Name
        </button>
        <button
          className={`border-2 rounded-lg p-1 ${sortBy === "category" ? "bg-gray-500 text-gray-400" : "text-wight-700"}`}
          onClick={() => setSortBy("category")}
        >
          {" "}
          Sort By Category
        </button>
        <button
          className={`border-2 rounded-lg ${sortBy === "categoryList" ? "bg-gray-500 text-gray-400" : "text-wight-700"}`}
          onClick={() => setSortBy("categoryList")}
        >
          {" "}
          Group By Category
        </button>
      </div>
    </div>
  );
}
