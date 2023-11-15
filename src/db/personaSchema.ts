import mongoose from "mongoose";

const Schema = mongoose.Schema;

const personaSchema = new Schema(
    {
        nombre: { type: String, required: true },
        sexo: {type: Boolean, required:true}
    }
)

export type PersonaModelType = mongoose.Document;

export const PersonaModel = mongoose.model<PersonaModelType>("Persona", personaSchema);