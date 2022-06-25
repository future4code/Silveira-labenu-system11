import { TurmaModel } from "../model/TurmaModel";
import { BaseDataInfo } from "./DataBaseInfo";


export class TurmaDataBase extends BaseDataInfo {

    public async createTurma(turma: TurmaModel) {
        try {
            await BaseDataInfo.connection("Turma").insert({
                id_turma: turma.getId(),
                nome: turma.getNome(),
                modulo: turma.getModulo()
            })
        } catch (err: any) {
            throw new Error("Error inesperado no createTurma()")
        }
    }

    public async getAll() {
        try {

            const result = await BaseDataInfo.connection("Turma")
            //raw(`SELECT * FROM Turma;`)
            return result

        } catch (err) {

            throw new Error("Error inesperado")

        }
    }

}