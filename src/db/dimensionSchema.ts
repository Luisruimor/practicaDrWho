import mongoose from "mongoose";
import {PlanetaModel} from "./planetaSchema.ts";

const Schema = mongoose.Schema;

const dimensionSchema = new Schema(
    {
        nombre: { type: String, required: true },
        planetasID : [
            {type: Schema.Types.ObjectId, ref:"Planeta"}
        ]
    }
)

export type DimensionModelType = mongoose.Document;
export const DimensionModel = mongoose.model<DimensionModelType>("Dimension", dimensionSchema);