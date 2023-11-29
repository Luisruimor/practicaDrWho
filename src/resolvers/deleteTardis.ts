import { DimensionModel } from "../db/dimensionSchema.ts";
import { PlanetaModel } from "../db/planetaSchema.ts";
import { TardisModel } from "../db/tardisSchema.ts";
import {PersonaModel} from "../db/personaSchema.ts";

export const borrarTardis = async (req, res) => {
    const encontrado = await TardisModel.findById(req.params.id);
    encontrado.dimensionesID.forEach(async (dim) => await DimensionModel.findByIdAndDelete(dim));
    encontrado.planetasID.forEach(async (plan) => await PlanetaModel.findByIdAndDelete(plan));
    encontrado.personasID.forEach(async (pers) => await PersonaModel.findByIdAndDelete(pers));

    await TardisModel.findByIdAndDelete(req.params.id);

    res.json(encontrado);
}