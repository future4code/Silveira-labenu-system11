import {Request, Response} from "express"
import { app } from "./app"

app.get("/test", (req: Request, res: Response) => {
    console.log("Olá Mundo")
    res.status(200).send("Olá Mundo")
})
