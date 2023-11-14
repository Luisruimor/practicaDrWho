import mongoose from "mongoose";

const Schema = mongoose.Schema;

const tardisSchema = new Schema(
    {
        dimensiones : [{by: mongoose.Schema.Types.ObjectId, ref:"Dimensiones"}],
        planetas : [{by: mongoose.Schema.Types.ObjectId, ref:"Planetas"}],
        personas : [{by: mongoose.Schema.Types.ObjectId, ref:"Personas"}],
        camuflaje: {type: String, required:true},
        anho: {type: Number, required:true}
    }
)

export type TardisModelType = mongoose.Document;

export const TardisModel = mongoose.model<TardisModelType>("Tardis", tardisSchema);