-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/
create database goleiros;
use goleiros;

create table cadastro (
idCadastro int primary key auto_increment, 
email varchar(30) unique, 
senha char(8)
)auto_increment = 1; 


create table jogos (
idJogos int primary key auto_increment, 
gols_feitos varchar (2), 
gols_sofridos varchar (2), 
fkCadastro int, 
foreign key(fkCadastro) references cadastro(idCadastro)
)auto_increment = 1;

/* insert into jogos values (); */

/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
