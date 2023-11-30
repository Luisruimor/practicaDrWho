import { DimensionModel } from "../db/dimensionSchema.ts";
import { PlanetaModel } from "../db/planetaSchema.ts";
import { TardisModel } from "../db/tardisSchema.ts";
import {PersonaModel} from "../db/personaSchema.ts";

export const borrarTardis = async (req:Request, res:Response) => {
    const id = req.params.id;
    try{
        const encontrado = await TardisModel.findById(id);
        if (!encontrado) res.status(404).send("No se ha encontrado la Tardis");

        encontrado.dimensionesID.forEach(async (dim) => await DimensionModel.findByIdAndDelete(dim));
        encontrado.planetasID.forEach(async (plan) => await PlanetaModel.findByIdAndDelete(plan));
        encontrado.personasID.forEach(async (pers) => await PersonaModel.findByIdAndDelete(pers));

        await TardisModel.findByIdAndDelete(id);

        res.status(200).send("Tardis borrada correctamente");
    } catch (e) {
        res.status(500).send(e.message);
    }
}