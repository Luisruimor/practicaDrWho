import { TardisModel } from "../db/tardisSchema.ts";
import {PersonaModel} from "../db/personaSchema.ts";
import {PlanetaModel} from "../db/planetaSchema.ts";
import {DimensionModel} from "../db/dimensionSchema.ts";

export const modificarTardis = async (req:Request, res:Response) => {
    const { dimensiones, camuflaje, año } = req.body;
    const id = req.params.id;
    try {
        if(!id) throw new Error("No se ha introducido un ID")
        if (!dimensiones || !camuflaje || !año) throw new Error("No se han introducido todos los datos");

        if(await TardisModel.findById(id)) res.status(404).send("No se ha encontrado la Tardis")

        const dimensionesID: mongoose.Types.ObjectId[] = [];
        const planetasTardis: mongoose.Types.ObjectId[] = [];
        const personasTardis: mongoose.Types.ObjectId[] = [];

        for (const dim of dimensiones) {
            const planetasID: mongoose.Types.ObjectId[] = [];

            for (const planeta of dim.planetas) {
                const personasID: mongoose.Types.ObjectId[] = [];

                for (const persona of planeta.personas) {
                    const nuevaPersona = new PersonaModel({ nombre: persona.nombre, sexo: persona.sexo });
                    const personaGuardado = await nuevaPersona.save();
                    personasID.push(personaGuardado._id) && personasTardis.push(personaGuardado._id);
                }

                const nuevoPlaneta = await new PlanetaModel({ nombre: planeta.nombre, personasID: personasID });
                const planetaGuardado= await nuevoPlaneta.save();
                planetasID.push(planetaGuardado._id) && planetasTardis.push(planetaGuardado._id);
            }
            const nuevaDimension = new DimensionModel({ nombre: dim.nombre, planetasID: planetasID });
            const dimensionGuardado = await nuevaDimension.save();
            dimensionesID.push(dimensionGuardado._id)
        }

        await TardisModel.findByIdAndUpdate(id,
            { camuflaje:camuflaje,
                año:año,
                dimensionesID: dimensionesID,
                planetasID: planetasTardis,
                personasID: personasTardis
            });

        res.status(200).json(await TardisModel.findById(id));
    } catch (e) {
        res.status(500).send(e.message);
    }
}