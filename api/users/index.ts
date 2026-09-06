import type { Context } from "@hono/hono";
import { hash } from "@felix/bcrypt";
import { insertUser } from "../db/users.ts";

export async function postUsers(c: Context) {
  //obtener la información del cliente
  const body = await c.req.json();
  console.log(body);
  //{"user_name":"hdhd","user_mail":"hdhdhd@gmail.com","password":"1234","passwordConfirm":"1234"}
  //modificar la información necesaria: convertir la contraseña en texto plano en un hash

  if (body.password === body.passwordConfirm) {
    // Código si la condición es verdadera
    const hashedPassword = await hash(body.password);
    const user=insertUser({
        nombre: body.user_name,
        password: hashedPassword,
        usuario: body.user_mail, 
    })
  return c.json(
    {
      message: "usuario creado",
      content: user
    },
    201,
  );  
  } else {
  return c.json(
    {
      message: "Las contraseñas no coinciden, prueba otra vez",
    },
    400,
  );  
    // Código si la condición es falsa
  }
  //guardar la información en la base de datos
  return c.json(
    {
      message: "Created",
    },
    201,
  );
}
