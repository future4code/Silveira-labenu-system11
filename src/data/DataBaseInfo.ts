import knex from "knex"
import dotenv from "dotenv"

dotenv.config()

export class BaseDataInfo {
    protected static connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            multipleStatements: true
        }
    })
}




/*
import knex from "knex";
import dotenv from 'dotenv'

dotenv.config();


const DataBaseInfo = knex({ //estabelece uma conexao com o banco
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        multipleStatements: true

    }

})
export default DataBaseInfo
*/