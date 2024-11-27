CREATE TABLE users1(
	id int NOT NULL PRIMARY KEY identity,
	name varchar(50) NULL,
	age int NULL,
	email varchar(150) NULL,
	contact varchar(15) NULL
)

select *
from users1

INSERT INTO users1(name,age, email, contact) VALUES('teste',27, 'email@teste.com', '99999-9999')

DROP TABLE users1