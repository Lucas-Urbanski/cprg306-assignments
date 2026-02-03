"use client";
import { useState } from "react";
import Item from "../week-3/item";

const NewItem = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const [nameTouched, setNameTouched] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNameTouched(true);

    if (!name || name.length < 2) {
      <Item name={name} quantity={quantity} category={category} />;
      alert(`Name: ${name} Quantity: ${quantity} Category: ${category}`);
      setName("");
      setQuantity(1);
      setCategory("produce");
      console.log(Item);
    }
  };

  return (
    <div className="flex justify-center mt-80">
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
            className={"flex rounded-sm disabled:cursor-not-allowed disabled:bg-gray-400 px-15 mx-4 mt-1"}
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
