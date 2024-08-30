// app/api/test-db-connection/route.js
import { NextResponse } from "next/server";
import { Client } from "pg";

export async function GET() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    console.log("connecting to database...");

    // Connect to the database
    await client.connect();

    console.log("connected");

    // Simple query to check connectivity
    const result = await client.query("SELECT NOW()");

    // If the query succeeds, return a success message
    return NextResponse.json({
      message: "Database connection successful!",
      timestamp: result.rows[0].now,
    });
  } catch (error) {
    // If the connection fails, return an error message
    return NextResponse.json(
      { message: "Database connection failed.", error: error.message },
      { status: 500 }
    );
  } finally {
    // Close the database connection
    await client.end();
  }
}
