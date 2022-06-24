import { Response, Request } from "express";
import baseDocente from "../data/baseDocente";







export default async function getDocentes(request:Request, response:Response): Promise<void>{
     
        try {
            
            const allDocent = new baseDocente()
            console.log(allDocent.getDocent())
            const result = await allDocent.getDocent()


         response.status(200).send(result)
        } catch (error:any) {
            throw new Error("Ops algo saiu fora da curva.")
        }

    }
