/*
Nota: el editor de MySQL Workbench trae configurado por default una protección para evitar ejecutar comandos de borrado o actualización masiva. Hay que desactivarla Menú Edición, Opción Preferencias y luego solapa Editor SQL. O se puede desactivar usando el siguiente código. set sql_safe_updates=0;
*/

-- Creamos la tabla de Facturas

CREATE TABLE facturas(
	letra char(1) NOT NULL,
	numero INT(4) ZEROFILL NOT NULL,
	fecha date,
	monto double,
	PRIMARY KEY (letra,numero)
);

-- Insertamos varios registros
INSERT INTO facturas VALUES ('A',1,'2018/10/18',500);
INSERT INTO facturas VALUES ('A',2,'2018/10/19',2500);
INSERT INTO facturas VALUES ('B',3,'2018/10/19',320);
INSERT INTO facturas VALUES ('B',4,'2018/10/20',120);
INSERT INTO facturas VALUES ('B',5,'2018/10/21',560);
INSERT INTO facturas VALUES ('C',6,'2018/10/22',300);
INSERT INTO facturas VALUES ('A',7,'2018/10/23',1500);
INSERT INTO facturas VALUES ('A',8,'2018/10/24',1200);
INSERT INTO facturas VALUES ('B',9,'2018/10/24',400);
INSERT INTO facturas VALUES ('C',10,'2018/10/25',525);


-- ----------------------------------------------------------------------------------------
-- UPDATE
-- ----------------------------------------------------------------------------------------

-- Reviso mi tabla de Facturas
SELECT * FROM facturas;

-- Modificar la letra de todas las facturas
-- NO EJECUTAR!!!!!!!!!!!!!!!!!!!!!!!!
UPDATE facturas SET letra='W';

-- Modificar el monto la factura B-0005
UPDATE facturas SET monto=355 WHERE letra='B' AND numero=5;

-- Multiplicar por 2 el monto las facturas del '2018/10/24'
UPDATE facturas SET monto=2*monto WHERE fecha='2018/10/24';

-- ----------------------------------------------------------------------------------------
-- DELETE
-- ----------------------------------------------------------------------------------------

-- Reviso mi tabla de Facturas
SELECT * FROM facturas;

-- Eliminar todas las facturas
-- NO EJECUTAR!!!!!!!!!!!!!!!!!!!!!!!!
DELETE FROM facturas;

-- Eliminar la factura A-0023
DELETE FROM facturas WHERE letra='A' AND numero=23;

-- Eliminar la factura A-0007
DELETE FROM facturas WHERE letra='A' AND numero=7;

-- Eliminar todas las facturas sin consumir los recursos del servidor
-- NO EJECUTAR!!!!!!!!!!!!!!!!!!!!!!!!
TRUNCATE TABLE facturas;

-- ----------------------------------------------------------------------------------------
-- FUNCIONES DEL SISTEMA
-- ----------------------------------------------------------------------------------------
--STRING FUNCTIONS

-- CONCAT
SELECT CONCAT(letra,'-',numero) AS Fac, monto FROM facturas;

-- LEFT
SELECT 'Lionel Messi', LEFT('Lionel Messi',3);

-- RIGHT
SELECT 'Lionel Messi', RIGHT('Lionel Messi',5);

-- TRIM
SELECT '     Batistuta      ', TRIM('     Batistuta      ');

-- UPPER
SELECT UPPER('El fc barcelona es el mejor equipo del mundo!!!');

-- REPLACE
SELECT REPLACE('Maradona es el mejor de todos los tiempos','Maradona','Messi');

--DATE FUNCTIONS
-- CURRENT_DATE()
SELECT *, CURRENT_DATE() FROM facturas;

-- DAYNAME()
SELECT *, DAYNAME(fecha) FROM facturas;

-- DATE_ADD()
SELECT *, DATE_ADD(fecha,INTERVAL 7 DAY) FROM facturas;

-- DATEDIFF()
SELECT *, DATEDIFF(CURRENT_DATE(),fecha) FROM facturas;

-- DAY() MONTH() YEAR()
SELECT *, DAY(fecha), MONTH(fecha), YEAR(fecha) FROM facturas;


-- ----------------------------------------------------------------------------------------
-- FUNCIONES DE AGRUPAMIENTO
-- ----------------------------------------------------------------------------------------

-- COUNT
-- Contar la cantidad de facturas
SELECT COUNT(*) FROM facturas;

-- Contar la cantidad de facturas del dia '2018/10/19'
SELECT COUNT(*) FROM facturas WHERE fecha='2018/10/19';

-- SUM
-- Sumar el total facturado
SELECT SUM(monto) FROM facturas;

-- Sumar el total facturado del dia '2018/10/19'
SELECT SUM(monto) FROM facturas WHERE fecha='2018/10/19';

-- MAX MIN
-- Obtener el maximo y minimo monto de las facturas
SELECT MIN(monto), MAX(monto) FROM facturas;

-- Obtener la primera y la ultima fecha facturada
SELECT MIN(fecha), MAX(fecha) FROM facturas;

-- AVG
-- Obtener monto promedio facturado
SELECT AVG(monto) FROM facturas;

-- ----------------------------------------------------------------------------------------
-- FUNCIONES DE AGRUPAMIENTO AVANZADO
-- ----------------------------------------------------------------------------------------

-- GROUP BY 
-- Sumar montos por dia de las facturas
SELECT fecha, SUM(monto) FROM facturas GROUP BY fecha;

-- Contar la cantidad de faturas por dia
SELECT fecha, COUNT(*) FROM facturas GROUP BY fecha;

-- HAVING
-- Sumar montos por dia de las facturas pero de los dias que nos fue mal (menos de 1000 pesos)
SELECT fecha, SUM(monto) FROM facturas GROUP BY fecha HAVING SUM(monto)<1000;

