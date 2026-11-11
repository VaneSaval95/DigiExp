CREATE TABLE if not exists users (
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	usuario TEXT NOT NULL unique, 
	pasword TEXT NOT NULL
);

CREATE TABLE perfiles (
    id_user INTEGER PRIMARY KEY,
    nombre_completo TEXT NOT NULL,
    cedula_profesional TEXT NOT NULL UNIQUE,
    cfdi TEXT NOT NULL,
    logo_path TEXT, 
    calle TEXT NOT NULL,
    numero_exterior TEXT NOT NULL,
    colonia TEXT NOT NULL,
    municipio TEXT NOT NULL,
    estado TEXT NOT NULL,
    codigo_postal TEXT NOT NULL,
    telefono TEXT NOT NULL,
    correo TEXT NOT NULL UNIQUE,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE users ADD nombre TEXT NOT NULL;
