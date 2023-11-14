import mongoose from "mongoose";

const Schema = mongoose.Schema;

const dimensionSchema = new Schema(
    {
        nombre: { type: String, required: true },
        planetas : [{by: mongoose.Schema.Types.ObjectId, ref:"Planetas"}]
    }
)

export type DimensionModelType = mongoose.Document;

export const DimensionModel = mongoose.model<DimensionModelType>("Dimensiones", dimensionSchema);