CREATE TABLE users {
    id SERIAL PRIMARY KEY, 
    username VARCHAR(255)
};

CREATE TYPE author AS ENUM ('user', 'AI');

CREATE TABLE lines {
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    line_author author, 
    poem INTEGER REFERENCES poems (id)

};

CREATE TABLE poems {
    id SERIAL PRIMARY KEY, 
    title TEXT DEFAULT 'untitled'
    poet INTEGER REFERENCES users (id)
}

CREATE TYPE temperature_range AS RANGE{
    subtype = DECIMAL(1,1)
}
CREATE TABLE configs {
    id SERIAL PRIMARY KEY,
    temperature DECIMAL(1,1) CHECK (temperature BETWEEN 0 AND 1)
    user INTEGER REFERENCES users (id)
}