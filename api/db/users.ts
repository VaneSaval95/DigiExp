import db from "./index.ts"
export type UserInsert = {
    usuario:string, 
    password: string,
    nombre: string,
}
export type User = UserInsert & {
    id: number
}
export async function insertUser(user: UserInsert): Promise<User> {

    const statement= await db.prepare("INSERT INTO users (usuario, pasword, nombre) VALUES(?, ?, ?) returning id;")
    const {id}= await statement.get([user.usuario, user.password, user.nombre]) as any;
    return {
        id,
        ...user
    }

}

export async function getUser(correo:string): Promise<User> {
    const statement = await db.prepare("Select * from users where usuario=?;");
    const {id, usuario, pasword, nombre}  = await statement.get([correo]) as any
    return {
        usuario: usuario,
        password:pasword,
        nombre:nombre,
        id: id
    } as User










}