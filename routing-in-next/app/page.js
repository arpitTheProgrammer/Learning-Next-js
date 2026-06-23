"use client"
import styles from './page.module.css'
import Link from "next/link";

import { useRouter } from 'next/navigation';

export default function Home() {
const router = useRouter();
  return (
    <main className={styles.main}>
        <h1>Hii This is Page</h1>
        <Link href='/login'>GO TO LOGIN PAGE</Link>
          <Link href='/about'>GO TO ABOUT PAGE</Link>
          <button onClick={()=>router.push("/login")}>Go to Login Page</button>
          <button onClick={()=>router.push("/about")}>Go to About Page</button>
    </main>
  );
}

// Linking and Navigation