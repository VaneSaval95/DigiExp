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
    const {id}= statement.get([user.usuario, user.password, user.nombre]) as any;
    return {
        id,
        ...user
    }

}