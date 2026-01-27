import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col px-5 pt-2">
      <h1 className="">CPRG306: Web Development 2</h1>
      <Link  href={"/week-2"}>week 2</Link>
      <Link href={"/week-3"}>week 3</Link>
    </div>
  );
}
