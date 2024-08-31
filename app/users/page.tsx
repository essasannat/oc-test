import { getUsers } from "@/lib/users";
import { Suspense } from "react";

interface User {
  id: number;
  username: string;
  email: string;
  created_at: string;
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div>
      <h1>Users List</h1>
      <Suspense fallback={"loading ..."}>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.username} ({user.email})
            </li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}
