import {TardisModel} from "../db/tardisSchema.ts";

export const mostrarTardis = async (req:Request, res:Response) => {
    try {
        const tardis = await TardisModel.find()
            .populate({
                path: "dimensions", model: "Dimension",
                populate: {
                    path: "planetas", model: "Planeta",
                    populate: {
                        path: "personas", model: "Persona"
                    }
                }
            },{strictPopulate:false})
        res.send(tardis)
    }catch (e) {
        res.status(500).send(e.message)
    }
}