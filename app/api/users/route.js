import { NextResponse } from "next/server";
import { Client } from "pg";

export async function GET() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    // Connect to the PostgreSQL database
    await client.connect();

    // Execute the query to get all users
    const result = await client.query("SELECT * FROM users");

    // Return the users as JSON
    return NextResponse.json(result.rows);
  } catch (error) {
    // Handle any errors
    return NextResponse.json(
      { message: "Database query failed", error: error.message },
      { status: 500 }
    );
  } finally {
    // Close the database connection
    await client.end();
  }
}
