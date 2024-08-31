import { query } from "./db";
import { User } from "./types";

export async function getUsers(): Promise<User[]> {
  const users = await query<User>("SELECT * FROM users");
  return users;
}
