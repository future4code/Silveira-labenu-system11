import {Request, Response} from "express"
import Docente from "../data/Docentes"
import baseDocente from "../data/baseDocente"

class Controller {

async createDocente(request:Request, response:Response){


    try {
        
        const{id_docente, nome, email, data_nasceu, id_turma, especialidades} = request.body

        if(!id_docente || !nome || !email || !data_nasceu || !id_turma || especialidades){

            throw new Error("todos os campos devem ser preenchidos")

        }

        const docente = new Docente(id_docente, nome, email, data_nasceu, id_turma, especialidades)
        const basedocente = new baseDocente()

        
        console.log("Criado", docente, basedocente)

    } catch (error:any) {
        response.status(500).end()
    }
}








 }

export default Controller