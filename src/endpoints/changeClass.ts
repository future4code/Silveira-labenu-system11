import Docente from "../data/Docentes"
import {Response, Request} from "express"
//Ideia de deixar aqui as lógicas de turma

import BaseDataBase from "../data/BaseDataBase"


 
class changeClass extends BaseDataBase {

    async updateDocent(Docente:Docente): Promise<void>{
    
        await this.getConnection()
        .update({
            id_turma: Docente.getIdTurma()
        }).where("id", Docente.getIdDocente())
       
    
    }
}

export class DocenteClass{

async changeClass(request:Request, response:Response){

    try {
        const{id_docente, id_turma}= request.body
        if(!id_docente || !id_turma){
            throw new Error("Um dos Id está incorreto")
        }

        const changeclass = new changeClass()
        await changeclass.updateDocent(id_turma)

        response.status(201).send("Aprovado")
    } catch (error:any) {
        response.status(500).send("Opss algo saiu da linha de código")
    }
}
}
