



export class User{
    
    constructor(
        private id: string,

        private nome: string,

        private email: string,

        private data_nasceu: string,

        private turma_id: string
        
        ){
            this.id = id
            this.nome = nome
            this.email = email
            this.data_nasceu = data_nasceu
            this.turma_id = turma_id
        }
            public getId(){
                return this.id
            }

            public getNome(){
                return this.nome
            }

            public getEmail(){
                return this.email
            }

            public getDataNasceu(){
                return this.data_nasceu
            }

            public geTurmaId(){
                return this.turma_id
            }
        
}