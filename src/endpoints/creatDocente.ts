
import BaseDataBase from "../data/BaseDataBase"
import Docente from "../data/Docentes";

const table: string = "Docente"
export default class creatDocente extends BaseDataBase {

async insertDocent(Docente:Docente): Promise<void>{

    await this.getConnection()
    .insert({
        id: Docente.getIdDocente(),
        nome: Docente.getNome(),
        email: Docente.getEmail(),
        data_nasceu: Docente.getDataNasceu(),
        turma_id: Docente.getIdTurma(),
        especialidades: Docente.getEspecialidades()
    }).into(table)
   

}

}