CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    username VARCHAR(255)
);

CREATE TYPE author AS ENUM ('user', 'AI');

CREATE TABLE poems (
    id SERIAL PRIMARY KEY, 
    title TEXT DEFAULT 'untitled',
    poet INTEGER REFERENCES users (id)
);

CREATE TABLE lines (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    line_author author, 
    poem INTEGER REFERENCES poems (id)

);

