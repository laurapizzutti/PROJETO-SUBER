use db_landpage;

create table cadastro(
 id INT auto_increment PRIMARY KEY,
 nome VARCHAR(255),
 email VARCHAR(255) UNIQUE
);

SELECT * FROM cadastro;