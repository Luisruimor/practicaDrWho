import mongoose from "mongoose";

const Schema = mongoose.Schema;

const tardisSchema = new Schema(
    {
        dimensiones : [{type: mongoose.Schema.Types.ObjectId, ref:"Dimension"}],
        camuflaje: {type: String, required:true},
        año: {type: Number, required:true}
    }
)

export type TardisModelType = mongoose.Document;

export const TardisModel = mongoose.model<TardisModelType>("Tardis", tardisSchema);