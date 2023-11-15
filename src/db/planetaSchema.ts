import mongoose from "mongoose";

const Schema = mongoose.Schema;

const planetaSchema = new Schema(
    {
        nombre: { type: String, required: true },
        personas : [{type: Schema.Types.ObjectId, ref:"Persona"}]
    }
)

export type PlanetaModelType = mongoose.Document;

export const PlanetaModel = mongoose.model<PlanetaModelType>("Planeta", planetaSchema);