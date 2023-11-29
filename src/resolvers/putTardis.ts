import { TardisModel } from "../db/tardisSchema.ts";
import {PersonaModel} from "../db/personaSchema.ts";
import {PlanetaModel} from "../db/planetaSchema.ts";
import {DimensionModel} from "../db/dimensionSchema.ts";

export const modificarTardis = async (req, res) => {
    const { dimensiones, camuflaje, año } = req.body;
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

    await TardisModel.findByIdAndUpdate(req.params.id,
        { camuflaje:camuflaje,
            año:año,
            dimensionesID: dimensionesID,
            planetasID: planetasTardis,
            personasID: personasTardis
        });

    res.send(await TardisModel.findById(req.params.id));
}