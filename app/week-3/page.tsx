import ItemList from "./item-list";
export default function Page() {
  return (  
    <main className="px-36.5">
      <h1 className="font-bold text-2xl pt-4 pb-1 ">Shopping List</h1>
      <ItemList />
    </main>
  );
}
