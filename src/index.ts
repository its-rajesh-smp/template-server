import cors from "cors";
import express from "express";

export const app = express();

/* Middlewares */
app.use(express.json());
app.use(cors({ origin: "*" }));

/* Routes */

/* Start Server */
const port = parseInt(process.env.PORT || "3000");

app.listen(port, "0.0.0.0", () => {
  console.log(`Server started on port ${port}`);
});
