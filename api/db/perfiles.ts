
import db from "./index.ts"
export type PerfilesInsert = {
    nombre_completo: string,
    cedula_profesional: string,
    cfdi: string,
    logo_path: string,
    calle: string,
    numero_exterior: string,
    colonia: string,
    municipio: string,
    estado: string,
    codigo_postal: string,
    telefono: string,
    correo: string,
    fecha_registro?: string,
    id_user: number
}
export type Perfil = PerfilesInsert
export async function insertPerfil(perfil: PerfilesInsert): Promise<Perfil> {
    const statement = await db.prepare(`INSERT INTO perfiles 
        (id_user,nombre_completo, cedula_profesional, cfdi, logo_path, calle, numero_exterior, colonia, municipio, estado, codigo_postal, telefono, correo, fecha_registro ) 
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ;`)
    const {id}= await statement.get([perfil.id_user,perfil.nombre_completo, perfil.cedula_profesional, perfil.cfdi, perfil.logo_path, perfil.calle,
        perfil.numero_exterior, perfil.colonia, perfil.municipio, perfil.estado, perfil.codigo_postal, perfil.telefono, perfil.correo,
    perfil.fecha_registro]) as any;
    return {
        ...perfil
    }

}

export async function updatePerfil(perfil: Perfil): Promise<Perfil> {
    const statement = await db.prepare(`update perfiles set
        nombre_completo = ?, cedula_profesional = ?, cfdi = ?, logo_path = ?, calle = ?, 
        numero_exterior = ?, colonia = ?, municipio = ?, estado = ?, codigo_postal = ?, telefono = ?, correo = ?
        where id_user = ?
        `)
        console.log("perfil", perfil)
    await statement.get([perfil.nombre_completo, perfil.cedula_profesional, perfil.cfdi, perfil.logo_path, perfil.calle,
        perfil.numero_exterior, perfil.colonia, perfil.municipio, perfil.estado, perfil.codigo_postal, perfil.telefono, perfil.correo,
    perfil.id_user]) 
    return perfil

}

export async function getPerfil(user_id:number): Promise<Perfil> {
    const statement = await db.prepare("Select * from perfiles where id_user=?;");
    
    const perfil =  await statement.get([user_id]) as Perfil
    
    
    return perfil 










}