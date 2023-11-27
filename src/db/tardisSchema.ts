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
//validación de dimensiones
tardisSchema
    .path("dimensionesID")
    .validate(async (dimensionesID: mongoose.Schema.Types.ObjectId[]) => {
        try {
            // Que todos los documentos tenga un id válido
            if (dimensionesID.some((id) => !mongoose.isValidObjectId(id))) return false;

            // Añade en un array lo documentos que tienen el mismo Id que en el modelo
            const dimensiones = await DimensionModel.find({_id: {$in: dimensionesID}})
            // Si el tamaño del modelo es el mismo tamaño que el array con todos los id => true
            return dimensiones.length === dimensionesID.length
        } catch (e) {
            return false
        }
    })

//validación de planetas

tardisSchema
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

//validación personas
tardisSchema
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

export type TardisModelType = mongoose.Document;