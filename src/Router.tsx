import { useState } from "react";
import Login from "./Login.tsx";
import PerfilForm from "./auth/PerfilForm.tsx"
import Registro from "./Registro.tsx";



export default function Router() {
    const [route, setRoute] = useState("/")
    const [user, setUser] = useState(null);
    let CurrentRoute = Login
    console.log(route, route =="/")
    if (route == "/") {
        CurrentRoute = Login
    } else if (route == "/perfil" && user != null) {
        CurrentRoute = PerfilForm
    } else {
        CurrentRoute = Registro
    }
    console.log(CurrentRoute)
    return <CurrentRoute setRoute={setRoute} setUser={setUser} user={user} />
}