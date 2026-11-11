import { Hono } from '@hono/hono'
import { cors } from '@hono/hono/cors'
import { postUsers, loginUsers } from "./users/index.ts";
import { serveStatic } from "@hono/hono/deno";
import { getPerfil, saveProfile } from "./perfiles/index.ts";

const app = new Hono()
// TODO: Quitar la siguiente linea de código, o poner detrás de una variable de entorno, antes del rpimer release
app.use(cors())
app.post("/api/register",postUsers)
app.post("/api/login", loginUsers)
app.post("/api/saveProfile", saveProfile)
app.get("/api/getProfile", getPerfil)
app.use("/*", serveStatic({
    root: "./dist"
}))
app.use("*", async(c)=>{
    try{
        const html= await Deno.readTextFile("./dist/index.html")
        return c.html(html)
    } catch(e){
        return c.text("404 no encontrado", 404)
    }
})
Deno.serve({port: 8000},app.fetch)
//export default app