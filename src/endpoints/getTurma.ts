import { TurmaDataBase } from './../data/TurmaDataBase';

import { Response, Request } from "express";

export default async function getTurma(req: Request, res: Response): Promise<void> {

    try {
        const turmaBD = new TurmaDataBase()
        console.log(turmaBD.getAll());
        const turma = await turmaBD.getAll()


        res.status(200).send(turma)


    } catch (error: any) {
        res.status(400).send()
    }


}