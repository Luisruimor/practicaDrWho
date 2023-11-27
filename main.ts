import express from "express";
import mongoose from "mongoose";

import { mostrarTardis } from "./src/resolvers/getTardis.ts";

const MONGO_URL = Deno.env.get("MONGO_URL");
await mongoose.connect(MONGO_URL) && console.log("Conectado a la base de datos")

const app = express();
app.use(express.json());

app
    .get("/api", (req:Request, res:Response) => {
        res.send("Bienvenido a la API-Tardis");
    })
    .get("/api/tardis", mostrarTardis)

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});