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
dimensionSchema
    .path("planetasID")
    .validate(async (planetasID: mongoose.Schema.Types.ObjectId[]) => {
        try {
            if (planetasID.some((id) => !mongoose.isValidObjectId(id))) return false;

            const dimensiones = await PlanetaModel.find({_id: {$in: planetasID}})
            return dimensiones.length === planetasID.length
        } catch (e) {
            return false
        }
    })

export type DimensionModelType = mongoose.Document;