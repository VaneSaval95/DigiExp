import { Hono } from '@hono/hono'
import { cors } from '@hono/hono/cors'
import { postUsers } from "./users/index.ts";
const app = new Hono()
// TODO: Quitar la siguiente linea de código, o poner detrás de una variable de entorno, antes del rpimer release
app.use(cors())
app.get('/', (c) => c.text('Hono!'))
app.post("/register",postUsers)
Deno.serve({port: 3000},app.fetch)
//export default app