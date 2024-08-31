import { getUsers } from "@/lib/users";
import Image from "next/image";
import Link from "next/link";
import { FaBeer } from "react-icons/fa";

export default async function Home() {
  console.log("db con string: ", process.env.DATABASE_URL);

  const users = await getUsers();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-4 p-24">
      <div className="text-6xl">
        Hello Openshift <FaBeer className="inline" />
      </div>
      <p className="text-slate-100">
        Added Database api route
        <Link href="/api/test-db-connection/">Test Db Connection</Link>{" "}
      </p>
      <p>Added webhook in github to trigger Openshift build</p>
      <p>
        Added users list from database page
        <Link href="/users" className="text-amber-700">
          Here
        </Link>
      </p>
      <p>Connection string: {process.env.DATABASE_URL}</p>

      <p>
        <Link href={"/users"} className="text-blue-500">
          Users Page
        </Link>
      </p>
      {users.map((user, index) => (
        <div key={index}>
          <p>username: {user.username}</p>
          <p>email: {user.email}</p>
        </div>
      ))}
    </main>
  );
}
