import {Request, Response} from "express"
import Docente from "../data/Docentes"

class Controller {

async createDocente(request:Request, response:Response){


    try {
        
        const{id, nome, email, data_nasceu, turma_id, especiallidades} = request.body

        if(!id || !nome || !email || !data_nasceu || !turma_id || especiallidades){

            throw new Error("todos os campos devem ser preenchidos")

        }

        const docente = new Docente(id, nome, email, data_nasceu, turma_id, especiallidades)
        
        
        console.log("Criado", docente)

    } catch (error:any) {
        response.status(500).end()
    }
}
 }

export default Controller