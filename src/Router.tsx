import { useState } from "react";
import Login from "./Login.tsx";
import Registro from "./Registro.tsx";



export default function Router() {
    const [route, setRoute] = useState("/")
    let CurrentRoute = Login
    if (route == "/") {
        CurrentRoute = Login
    } else {
        CurrentRoute = Registro
    }

    return <CurrentRoute setRoute={setRoute} />
}