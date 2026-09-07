import Image from "next/image";

export default function Home() {
  return (
    <div>
      {
        process.env.NODE_ENV === "development"
          ? <h1>You are on Development Mode</h1>
          : <h1>You are on Production Mode</h1>
      }
      <h1>
        Redirect to Home Page
      </h1>
    </div>
  );
}
