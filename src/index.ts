import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import router from "./api/routes";
import { getEnv } from "./api/utils/env.util";

/* Config */
dotenv.config({
  path: process.env.NODE_ENV === "production" ? ".env.prod" : ".env.dev",
});
export const app = express();

/* Middlewares */
app.use(express.json());
app.use(cors({ origin: "*" }));

/* Routes */
app.use(router);

/* Start Server */
const port = parseInt(getEnv("PORT") || "3000");

app.listen(port, () => {
  console.log(`User server started on ${port}`);
});
