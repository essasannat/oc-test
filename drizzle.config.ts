import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  dialect: "postgresql",
  schema: "./db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
  verbose: true,
  strict: true,
} satisfies Config;
