"use client"
import Link from "next/link";
import './page.module.css'
import { useRouter } from "next/navigation"; 
export default function Home() {
  const router = useRouter();
  return (
      <>
      <div>
        <h1>API data fetching</h1>
        <Link href="/productlist">Go to Product List</Link>
        <button onClick={()=>router.push("/serverproductlist")}>Go To Server Product List</button>
      </div>
      </>
  );
}
