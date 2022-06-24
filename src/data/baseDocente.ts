import Docente from "./Docentes";
import BaseDataBase from "./BaseDataBase";


const table: string = "Docentes"

export class baseDocente extends BaseDataBase{

    async insertDocente(docente:Docente):Promise<void>{

        await this.getConnection()
        .insert({
            id_docente: docente.getIdDocente(),
            nome: docente.getNome(),
            email: docente.getEmail(),
            data_nasceu: docente.getDataNasceu(),
            id_turma: docente.id_turma,
            especialidade: docente.getEspecialidades(),
        }).into(table)
    }

   
        async getDocent(): Promise<void>{
        
            await this.getConnection()
            .select(
               "*"
            ).from("Docente")
           
        
        }
    

}

export default baseDocente