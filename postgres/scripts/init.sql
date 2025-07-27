-- Create a database named "test" if it does not exist
DO
$$
BEGIN
   IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'test') THEN
      CREATE DATABASE test;
   END IF;
END
$$;

-- Connect to the "test" database to create tables
\c test

-- Create a table named "foo"
CREATE TABLE IF NOT EXISTS foo (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);