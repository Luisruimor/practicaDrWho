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

planetaSchema
    .path("personasID")
    .validate(async (personasID: mongoose.Schema.Types.ObjectId[]) => {
        try {
            if (personasID.some((id) => !mongoose.isValidObjectId(id))) return false;

            const dimensiones = await PersonaModel.find({_id: {$in: personasID}})
            return dimensiones.length === personasID.length
        } catch (e) {
            return false
        }
    })

export type PlanetaModelType = mongoose.Document;

export const PlanetaModel = mongoose.model<PlanetaModelType>("Planeta", planetaSchema);