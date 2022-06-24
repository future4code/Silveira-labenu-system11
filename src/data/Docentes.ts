
import { User } from "./User";
import { Especialidades } from "../Model/Especialidades";



class Docente extends User{

    private especialidades: Especialidades[] = [];


    constructor(
        id: string,
        nome: string,
        email: string,
        data_nasceu: string,
        turma_id: string,
        especialiadades: Especialidades[]
    ){
        super(id, nome, email, data_nasceu, turma_id);
        console.log("Confirmando cadastro");
        this.especialidades = especialiadades;

    }


    public getEspecialidades(): Especialidades[]{
        return this.especialidades
    }
    
 

}

export default Docente