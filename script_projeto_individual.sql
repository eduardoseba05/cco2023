create database goleiros_sa;
use goleiros_sa;

create table cadastro (idCadastro int primary key, email varchar(30), senha char(8)); 


create table jogos (idJogos int primary key, minutos_de_jogo varchar(3), gols_sofridos varchar (2), fkCadastro int, foreign key(fkCadastro) references cadastro(idCadastro));