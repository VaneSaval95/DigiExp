import { Hono } from '@hono/hono'
const app = new Hono()

app.get('/', (c) => c.text('Hono!'))
app.post("/register", (c) => {
    return c.text("registrado")
})
Deno.serve({port: 3000},app.fetch)
//export default app