import {TardisModel} from "../db/tardisSchema.ts";
import {Request, Response} from "express";

export const mostrarTardisById = async (req:Request, res:Response) => {
    const id = req.params.id;
    try {
        if (!id) throw new Error("No se ha introducido un ID")
        const encontrado = await TardisModel.findById(id)
            .populate({
                path: 'dimensionesID',
                select:"-__v",
                populate: {
                    path: 'planetasID',
                    select:"-__v",
                    populate: {
                        path: 'personasID',
                        select:"-__v"
                    }
                }
            })
            .select("-__v -planetasID -personasID")
        if (!encontrado) res.status(404).send("No se ha encontrado la Tardis")

        res.status(200).json(encontrado);
    } catch (e) {
        res.status(500).send(e.message);
    }
}

export const descargarTardisById = async (req:Request, res:Response) => {
    const id = req.params.id;
    try {
        if (!id) throw new Error("No se ha introducido un ID")
        const encontrado = await TardisModel.findById(id)
            .populate({
                path: 'dimensionesID',
                select:"-__v -_id",
                populate: {
                    path: 'planetasID',
                    select:"-__v -_id",
                    populate: {
                        path: 'personasID',
                        select:"-__v -_id"
                    }
                }
            })
            .select("-__v -planetasID -personasID -_id")
        if (!encontrado) res.status(404).send("No se ha encontrado la Tardis")

        // Esto es para que se descargue automaticamente el archivo
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Content-Disposition', 'attachment; filename="tardis.json"');

        res.status(200).send(JSON.stringify(encontrado));
    } catch (e) {
        res.status(500).send(e.message);
    }
}

export const mostrarTardis = async (req:Request, res:Response) => {
    try {
        const encontrado = await TardisModel.find()
            .populate({
                path: 'dimensionesID',
                select:"-__v",
                populate: {
                    path: 'planetasID',
                    select:"-__v",
                    populate: {
                        path: 'personasID',
                        select:"-__v"
                    }
                }
            })
            .select("-__v -planetasID -personasID")

        if (!encontrado) res.status(404).send("No se ha encontrado la Tardis")

        res.status(200).json(encontrado);
    } catch (e) {
        res.status(500).send(e.message);
    }
}