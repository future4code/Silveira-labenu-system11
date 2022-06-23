



export class User{
    
    constructor(
        private id: string,

        private nome: string,

        private email: string,

        private data_nasceu: string,

        private turma_id: string
        
        ){
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
}