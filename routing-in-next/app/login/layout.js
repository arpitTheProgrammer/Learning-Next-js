"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./login.css";

export default function Layout({ children }) {
    const pathName = usePathname()
    console.log(pathName)
  return (
    <div className="layout-container">
        {
            pathName !== "/login/loginteacher" ? 
      <ul>
        <li>
          <h1>NavBar</h1>
        </li>
        <li>
          <Link href="/login/loginteacher">Login Teacher</Link>
        </li>
        <li>
          <Link href="/login/loginstudent">Login Student</Link>
        </li>
      </ul>
            : null
        }
      {children}
    </div>
  );
}
