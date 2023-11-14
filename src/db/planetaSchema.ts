import mongoose from "mongoose";

const Schema = mongoose.Schema;

const planetaSchema = new Schema(
    {
        nombre: { type: String, required: true },
        personas : [{type: mongoose.Schema.Types.ObjectId, ref:"Personas"}]
    }
)

export type PlanetaModelType = mongoose.Document;

export const PlanetaModel = mongoose.model<PlanetaModelType>("Planetas", planetaSchema);