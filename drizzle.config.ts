import { defineConfig } from "drizzle-kit";

import * as dotenv from "dotenv";

dotenv.config({
    path: '.env',
    out: './src/db/migrations'
    dbConnections: {
        url: process.env.DATABASE_URL
    }
})