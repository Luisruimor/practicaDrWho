import mongoose from "mongoose";

const Schema = mongoose.Schema;

const dimensionSchema = new Schema(
    {
        nombre: { type: String, required: true },
        planetas : [{type: Schema.Types.ObjectId, ref:"Planeta"}]
    }
)

export type DimensionModelType = mongoose.Document;

export const DimensionModel = mongoose.model<DimensionModelType>("Dimension", dimensionSchema);