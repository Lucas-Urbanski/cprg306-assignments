"use client";
import { useState } from "react";
import Item from "../../week-3/item";

const NewItem = ({ onAddItem }: { onAddItem: any }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const [nameTouched, setNameTouched] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNameTouched(true);

    const newItem = {
      name,
      quantity,
      category,
    };

    if (!name || name.length < 2) {
      alert("Invalid Fields");
      return;
    }

    <Item name={name} quantity={quantity} category={category} />;
    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce");
    setNameTouched(false);
    console.log(Item);
  };

  return (
    <div className="flex justify-center rounded-sm bg-zinc-800 mt-2 p-2">
      <form className="space-y-0.5" onSubmit={handleSubmit}>
        <input
          required
          type="text"
          onBlur={() => setNameTouched(true)}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={
            nameTouched && name == ""
              ? "border-2 border-red-700 text-center"
              : "border-2 border-white text-center"
          }
        />
        <p
          className={
            nameTouched && name == ""
              ? "flex text-sm text-red-500"
              : "flex text-sm text-green-500"
          }
        >
          {nameTouched && name == "" ? `Enter a name` : null}
        </p>
        <div>
          <input
            required
            type="text"
            min={1}
            max={99}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="text-center border-2"
          />
        </div>
        <div>
          <select
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="flex text-center border-2 px-8.5"
          >
            <option className="bg-black" value="Produce">
              Produce
            </option>
            <option className="bg-black" value="Dairy">
              Dairy
            </option>
            <option className="bg-black" value="Bakery">
              Bakery
            </option>
            <option className="bg-black" value="Meat">
              Meat
            </option>
            <option className="bg-black" value="Frozen Foods">
              Frozen Foods
            </option>
            <option className="bg-black" value="Canned Goods">
              Canned Goods
            </option>
            <option className="bg-black" value="Dry Goods">
              Dry Goods
            </option>
            <option className="bg-black" value="Snacks">
              Snacks
            </option>
            <option className="bg-black" value="Household">
              Household
            </option>
            <option className="bg-black" value="Other">
              Other
            </option>
          </select>
          <button
            disabled={name == "" ? true : false}
            className={
              "flex rounded-sm bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-500 px-19  mt-1"
            }
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewItem;
