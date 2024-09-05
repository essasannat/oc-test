CREATE TABLE IF NOT EXISTS "psr" (
	"id" serial NOT NULL,
	"name" text,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "fwrequest" ADD PRIMARY KEY ("id");--> statement-breakpoint
ALTER TABLE "fwrequest" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "fwrequest" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "fwrequest" ADD COLUMN "email" text;--> statement-breakpoint
ALTER TABLE "fwrequest" ADD COLUMN "password" text;--> statement-breakpoint
ALTER TABLE "fwrequest" ADD COLUMN "role" text;