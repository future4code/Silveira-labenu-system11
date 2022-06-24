
import { Especialidades } from "../Model/Especialidades";



class Docente{

    private especialidades: Especialidades[] = [];
    public id_docente;
    public nome;
    public email;
    public data_nasceu;
    public id_turma

    constructor(
        id_docente: string,
        nome: string,
        email: string,
        data_nasceu: Date,
        id_turma: number,
        especialiadades: Especialidades[]
    ){
       
        console.log("Confirmando cadastro");
        this.especialidades = especialiadades;
        this.id_docente = id_docente;
        this.nome = nome;
        this.email = email;
        this.data_nasceu = data_nasceu
        this.id_turma = id_turma
    }


    public getEspecialidades(): Especialidades[]{
        return this.especialidades
    };
    public getIdDocente():string{
        return this.id_docente
    };
    public getIdTurma():number{
        return this.id_turma
    };
    public getNome():string{
        return this.nome
    };
    public getEmail():string{
        return this.email
    };
    public getDataNasceu():Date{
        return this.data_nasceu
    };

}

export default Docente