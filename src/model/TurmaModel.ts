

export class TurmaModel {
    private id: number;
    private nome: string;
    // private docentes: Array<number>;
    // private estudantes: Array<number>;
    private modulo: number;


    constructor(id: number, name: string, modulo: number) {
        this.id = id;
        this.nome = name;
        // this.docentes = docentes;
        // this.estudantes = estudantes;
        this.modulo = modulo;
    }

    public getId() {
        return this.id;
    }

    public getNome() {
        return this.nome;
    }

    // public getDocentes() {
    //     return this.docentes;
    // }

    // public getEstudantes() {
    //     return this.estudantes;
    // }

    public getModulo() {
        return this.modulo;
    }

}