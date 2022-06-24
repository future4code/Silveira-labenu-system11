

type Especialidade = {
    id:number,
    nome:EspecialidadesEN
}


export enum EspecialidadesEN {
    JS = "JS",
    CSS = "CSS",
    React = "React",
    TypeScript = "TypeScript",
    POO = "POO"
}


export interface Especialidades {
    especialidades: Especialidade[]
}


