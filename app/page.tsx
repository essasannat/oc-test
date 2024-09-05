import { getUsers } from "@/lib/users";
import Image from "next/image";
import Link from "next/link";
import { FaBeer } from "react-icons/fa";

export default async function Home() {
  console.log("db con string: ", process.env.DATABASE_URL);
  return (
    <>
      <h1 className="text-center text-4xl mt-9 text-clip text-gradient-to-t from-white to-blue-500">
        Testing Drizzle
      </h1>
    </>
  );
}
