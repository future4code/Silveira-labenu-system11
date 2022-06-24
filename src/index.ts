

import app from "./app"
import Controller from "./endpoints/controller"
import { AddressInfo } from "net"

const controller = new Controller

app.post("/docente", controller.createDocente)

app.get("/test", (req: Request, res: Response) => {
    console.log("Olá Mundo")
    res.status(200).send("Olá Mundo")
})


const server = app.listen(process.env.PORT || 3005, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running http://localhost:${address.port}`);
    } else {
       console.error(`Failure starting server.`);
    }
}); 

