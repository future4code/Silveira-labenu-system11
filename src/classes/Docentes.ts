
import { User } from "./User";
import { Especialidades } from "../model/Especialidades";



export class Docente extends User {

    private especialidades: Especialidades[] = [];


    constructor(
        id: string,
        nome: string,
        email: string,
        data_nasceu: string,
        turma_id: string,
        especiallidades: Especialidades[]
    ) {
        super(id, nome, email, data_nasceu, turma_id);
        console.log("Confirmando cadastro");
        this.especialidades = especiallidades;
    }


    public getEspecialidades(): Especialidades[] {
        return this.especialidades
    }

}

