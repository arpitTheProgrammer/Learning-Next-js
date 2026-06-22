'use client'
import Image from "next/image";
import styles from './page.module.css'
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("Arpit")
  const apple = () => {
    alert("FRUIT")
  }
  const HandleChange = () => {
    setName("Srivastava")
  }
  const InnerComponent = () => {
    return(
      <h1>Inner Component</h1>
    )
  }
  return (
   <main className={styles.main}>
      <h1>Hii this is Next js {name}</h1>

      {/* We Cannot call event directly */}
      <button onClick={()=>alert("Hello Next Js")}>Click Me</button>
      <button onClick={apple}>Click me</button>
      <button onClick={HandleChange}>Change Name</button>
      <InnerComponent/>
   </main>
  );
}
