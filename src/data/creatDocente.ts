
import BaseDataBase from "./BaseDataBase"
import Docente from "./Docentes";

const table: string = "Docente"
export default class creatDocente extends BaseDataBase {

async insertDocent(Docente:Docente): Promise<void>{

    await this.getConnection()
    .insert({
        id: Docente.getId(),
        nome: Docente.getNome(),
        email: Docente.getEmail(),
        data_nasceu: Docente.getDataNasceu(),
        turma_id: Docente.geTurmaId(),
        especialidades: Docente.getEspecialidades()
    }).into(table)
   

}
    



}