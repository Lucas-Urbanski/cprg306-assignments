interface ItemProps {
  name: string;
  quantity: number;
  category: string;
  onSelect: () => void;
}

const Item = ({ name, quantity, category, onSelect }: ItemProps) => {
  return (
    <div onClick={onSelect} className="border rounded-sm mt-2 px-2 pb-2 pt-2">
      <h3>{name}</h3>
      <h3>Quantity: {quantity}</h3>
      <h3>
        Category:{" "}
        {category
          .toLowerCase()
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}
      </h3>
    </div>
  );
};

export default Item;
