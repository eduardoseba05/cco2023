create database goleiros;
use goleiros;

create table cadastro (
idCadastro int primary key auto_increment, 
email varchar(30), 
senha char(8)
)auto_increment = 1; 


create table jogos (
idJogos int primary key auto_increment, 
vitoria varchar (2), 
derrota varchar (2), 
fkCadastro int, 
foreign key(fkCadastro) references cadastro(idCadastro)
)auto_increment = 1;

insert into jogos values ();
