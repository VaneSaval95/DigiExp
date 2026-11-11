import type { Context } from "@hono/hono";
import { getPerfil as getDbPerfil, insertPerfil as insertDbPerfil, Perfil, PerfilesInsert, updatePerfil as UpdateDbPerfil} from "./../db/perfiles.ts"
export async function saveProfile(c: Context) {
    const body = await c.req.json();
    console.log("body")
    const perfil = await getDbPerfil(body.id_user as number)
    console.log("perfil  get ", perfil)
    if (perfil) {
        const updatePerfil: Perfil = {
            nombre_completo: body.nombreCompleto,
            cedula_profesional: body.cedulaProfesional,
            cfdi: body.cfdi,
            logo_path: body.url,
            calle: body.calle,
            numero_exterior: body.numeroExterior,
            colonia: body.colonia,
            municipio: body.municipio,
            estado: body.estado,
            codigo_postal: body.codigoPostal,
            telefono: body.telefono,
            correo: body.correo,
            id_user: body.id_user
        }
        console.log("update", updatePerfil)
        await UpdateDbPerfil(updatePerfil);
        return c.json(body.user_id)
    } else {
        const insertPerfil: PerfilesInsert = {
            id_user: body.id_user,
            nombre_completo: body.nombreCompleto,
            cedula_profesional: body.cedulaProfesional,
            cfdi: body.cfdi,
            logo_path: body.url,
            calle: body.calle,
            numero_exterior: body.numeroExterior,
            colonia: body.colonia,
            municipio: body.municipio,
            estado: body.estado,
            codigo_postal: body.codigoPostal,
            telefono: body.telefono,
            correo: body.correo,
            fecha_registro: new Date().toISOString()
        }
        const id = await insertDbPerfil(insertPerfil)
        return c.json({
            id: id,
            
        })
    }
    c.json(perfil, 200)
}


export async function getPerfil(c: Context) {
    const id = await c.req.query('id_user')
    if (id) {
        console.log("getperfil happening", Number(id))
        const perfil = await getDbPerfil(Number(id))
        console.log("getPerfil", perfil)
        if (perfil) {
            const json: any = {
            id_user: perfil.id_user,
            nombreCompleto: perfil.nombre_completo,
            cedulaProfesional: perfil.cedula_profesional,
            cfdi: perfil.cfdi,
            url: perfil.logo_path,
            calle: perfil.calle,
            numeroExterior: perfil.numero_exterior,
            colonia: perfil.colonia,
            municipio: perfil.municipio,
            estado: perfil.estado,
            codigoPostal: perfil.codigo_postal,
            telefono: perfil.telefono,
            correo: perfil.correo,
            fecha_registro: new Date().toISOString()
            }
            return c.json(json)
        } else {
            return c.json({}, 404)
        }
    }
    return c.json({"error":"malformed"}, 400)
}