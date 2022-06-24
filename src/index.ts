

import {app} from "./app"
import Controller from "./endpoints/controller"
import { AddressInfo } from "net"
import { DocenteClass } from "./endpoints/changeClass"
import getDocentes from "./endpoints/getDocentes"


const controller = new Controller
const docenteclass = new DocenteClass

app.get("/docente", getDocentes)
app.post("/docente", controller.createDocente)
app.post("/docente/mudar", docenteclass.changeClass)







const server = app.listen(process.env.PORT || 3005, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running http://localhost:${address.port}`);
    } else {
       console.error(`Failure starting server.`);
    }
}); 

