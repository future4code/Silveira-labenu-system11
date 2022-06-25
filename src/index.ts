import { Request, Response } from "express"
import { app } from "./app"
import createTurma from "./endpoints/createTurma"
import getTurma from "./endpoints/getTurma"

// ================= O QUE FAZER =================

// - criar a Tabela do banco de dados, 
// - fazer o bd funcionar 
// - fazer os endpoints 

// observacoes:
//      - ultilizar POO para fazer as coisas.
//      -  TODOS OS IDs DEVEM SER EM NUMBER




app.post('/turma', createTurma)
app.get('/turma', getTurma) // Buscar turmas ativas
app.put('/turma/:',)  // Mudar turma de módulo