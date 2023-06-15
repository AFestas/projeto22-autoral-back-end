import pkg from "@prisma/client";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export default prisma;

/*
import { PrismaClient } from '@prisma/client';

export let prisma: PrismaClient;
export function connectDb(): void {
  prisma = new PrismaClient();
}

export async function disconnectDB(): Promise<void> {
  await prisma?.$disconnect();
}

/*
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

const connectionDb = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default connectionDb;
--------------------------------------

const { Pool } = pg;

const connectionDb = new Pool({
  connectionString: "postgres://postgres:28828312@localhost:5432/afestas",
});

export default connectionDb;
*/