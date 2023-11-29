import mongoose from "mongoose";
import {PersonaModel} from "./personaSchema.ts";

const Schema = mongoose.Schema;

const planetaSchema = new Schema(
    {
        nombre: { type: String, required: true },
        personasID : [
            {type: Schema.Types.ObjectId, ref:"Persona"}
        ]
    }
)

export type PlanetaModelType = mongoose.Document;

export const PlanetaModel = mongoose.model<PlanetaModelType>("Planeta", planetaSchema);