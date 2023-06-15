import express, { json } from "express";
import cors from "cors";
import { router } from "./routes/index.js";

const app = express();
app
    .use(json())
    .use(cors())
    .use(router);

const port = 5000;
app.listen(port, () => console.log(`Server running in port: ${port}`));