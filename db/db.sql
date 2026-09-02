CREATE TABLE if not exists users (
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	usuario TEXT NOT NULL unique, 
	pasword TEXT NOT NULL
);



ALTER TABLE users ADD nombre TEXT NOT NULL;
