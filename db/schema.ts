import { serial, text, timestamp, pgTable, uuid } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: serial("id"),
  name: text("name"),
  email: text("email"),
  password: text("password"),
  role: text("role").$type<"admin" | "customer">(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export const fwrequest = pgTable("fwrequest", {
  id: serial("id"),
  name: text("name"),
  email: text("email"),
  password: text("password"),
  role: text("role").$type<"admin" | "customer">(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export const psr = pgTable("psr", {
  id: serial("id"),
  PSRNumber: text("name"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});
