import { TurmaDataBase } from './../data/TurmaDataBase';

import { Response, Request } from "express";
import { TurmaModel } from "../model/TurmaModel";


export default async function createTurma(req: Request, res: Response): Promise<void> {
    try {

        let modulo1: number = 0

        const { nome, modulo } = req.body

        if (!nome || !modulo) {
            throw new Error("deu erro , favor digitar: name")
        }
        if (!modulo) {
            modulo1 = 0
        } else {
            modulo1 = Number(modulo)
        }
        console.log(modulo1);
        console.log('=======================');
        console.log(typeof (Date.now()));
        console.log('=======================');

        console.log(typeof (String(1)));

        // fazer a requisicao do banco 

        const turma = new TurmaModel(Math.random() * (999999999 - 0) + 0, String(nome), modulo1);
        const turmaDB = new TurmaDataBase();

        await turmaDB.createTurma(turma);

        res.status(200).send('turma criada');

    } catch (err: any) {

        console.log('deu erro no createTurma');
        res.status(500).send('deu erro no createTurma')

    }
}