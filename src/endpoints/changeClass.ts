import Docente from "../data/Docentes"
import {Response, Request} from "express"
//Ideia de deixar aqui as lógicas de turma

import BaseDataBase from "../data/BaseDataBase"


 
export default class changeClass extends BaseDataBase {

    async updateDocent(Docente:Docente): Promise<void>{
    
        await this.getConnection()
        .update({
            turma_id: Docente.getIdTurma()
        }).where("id", Docente.getIdDocente)
       
    
    }
}

export class DocenteClass{

async changeClass(request:Request, response:Response){

    try {
        const{id, turma_id}= request.body
        if(!id || !turma_id){
            throw new Error("Um dos Id está incorreto")
        }
        response.status(201).send("Aprovado")
    } catch (error:any) {
        response.status(500).send("Opss algo saiu da linha de código")
    }
}
}
