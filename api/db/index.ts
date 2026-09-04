import { DatabaseSync } from "node:sqlite";
const db = new DatabaseSync("db.sql");
export type UserInsert = {
    usuario:string, 
    password: string,
    nombre: string,
}
export type User = UserInsert & {
    id: number
}
export function insertUser(user: UserInsert): User {
    const statement= db.prepare("INSERT INTO users (usuario, pasword, nombre) VALUES(?, ?, ?) returning id;")
    const {id}= statement.get(user.usuario, user.password, user.nombre) as any;
    return {
        id,
        ...user
    }

}