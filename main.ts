import express from "express";
import mongoose from "mongoose";

import {descargarTardisById, mostrarTardis, mostrarTardisById} from "./src/resolvers/getTardis.ts";
import { añadirTardis } from "./src/resolvers/postTardis.ts";
import { borrarTardis } from "./src/resolvers/deleteTardis.ts";
import { modificarTardis } from "./src/resolvers/putTardis.ts";

const MONGO_URL = Deno.env.get("MONGO_URL");
await mongoose.connect(MONGO_URL) && console.log("Conectado a la base de datos")

const app = express();
app.use(express.json());

app
    .get("", (req:Request, res:Response) => {
        res.status(200).send("Bienvenido a la API-Tardis");
    })
    .get("/api", mostrarTardis)
    .get("/api/:id", mostrarTardisById)
    .get("/api/:id/download",descargarTardisById)
    .post("/api",añadirTardis)
    .put("/api/:id", modificarTardis)
    .delete("/api/:id", borrarTardis)

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});