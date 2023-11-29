import mongoose from "mongoose";
import {DimensionModel} from "./dimensionSchema.ts";
import {PlanetaModel} from "./planetaSchema.ts";
import {PersonaModel} from "./personaSchema.ts";

const Schema = mongoose.Schema;

const tardisSchema = new Schema(
    {
        dimensionesID: [
            {type: mongoose.Schema.Types.ObjectId, ref: "Dimension"}
        ],
        planetasID: [
            {type: mongoose.Schema.Types.ObjectId, ref: "Planeta"}
        ],
        personasID: [
            {type: mongoose.Schema.Types.ObjectId, ref: "Persona"}
        ],
        camuflaje: {type: String, required: true},
        año: {type: Number, required: true}
    }
)

export type TardisModelType = mongoose.Document;
export const TardisModel = mongoose.model<TardisModelType>("Tardis", tardisSchema);