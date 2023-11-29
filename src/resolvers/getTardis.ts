import {TardisModel} from "../db/tardisSchema.ts";
import {Request, Response} from "express";

export const mostrarTardisById = async (req:Request, res:Response) => {
    const encontrado = await TardisModel.findById(req.params.id)
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

    res.json(encontrado);
}

export const descargarTardisById = async (req:Request, res:Response) => {
const encontrado = await TardisModel.findById(req.params.id)
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

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', 'attachment; filename="data.json"');
    res.send(JSON.stringify(encontrado));

    res.json(encontrado);
}

export const mostrarTardis = async (req:Request, res:Response) => {
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

    res.json(encontrado);
}