-- Crear tabla de productos y marcas
DROP TABLE Productos;

CREATE TABLE Productos (
        idProducto INT(11) NOT NULL AUTO_INCREMENT,
        Nombre VARCHAR(30) NOT NULL ,
        Precio DOUBLE NOT NULL ,
        Marca INT NOT NULL ,
        Categoria VARCHAR(20) NOT NULL ,
        Presentacion VARCHAR(30) NOT NULL,
        Stock INT(6) NOT NULL,
        PRIMARY KEY (idProducto)
) CHARSET utf8;

DROP TABLE Marcas;

CREATE TABLE Marcas (
        idMarca INT NOT NULL AUTO_INCREMENT,
        Nombre VARCHAR(30) NOT NULL,
        PRIMARY KEY (idMarca)
) CHARSET utf8;

-- Insertar registros
INSERT INTO Productos(Nombre,Precio,Marca,Categoria,Presentacion,Stock) VALUES('iPhone 6',499.99,1,'Smartphone','16GB',500);
INSERT INTO Productos(Nombre,Precio,Marca,Categoria,Presentacion,Stock) VALUES('iPad Pro',599.99,1,'Smartphone','128GB',300);
INSERT INTO Productos(Nombre,Precio,Marca,Categoria,Presentacion,Stock) VALUES('Nexus 7',299.99,4,'Smartphone','32GB',250);
INSERT INTO Productos(Nombre,Precio,Marca,Categoria,Presentacion,Stock) VALUES('Galaxy S7',459.99,2,'Smartphone','64GB',200);
INSERT INTO Productos(Nombre,Precio,Marca,Categoria,Presentacion,Stock) VALUES('Impresora T23',489.99,8,'Impresoras','Color',180);
INSERT INTO Productos(Nombre,Precio,Marca,Categoria,Presentacion,Stock) VALUES('Impresora T33',399,8,'Impresoras','Color',200);
INSERT INTO Productos(Nombre,Precio,Marca,Categoria,Presentacion,Stock) VALUES('Lavarropa 7000',1679,4,'Lavarropas','Automático',100);
INSERT INTO Productos(Nombre,Precio,Marca,Categoria,Presentacion,Stock) VALUES('Camara Digital 760',649,9,'Fotografía','Sin detalle',150);
INSERT INTO Productos(Nombre,Precio,Marca,Categoria,Presentacion,Stock) VALUES('Notebook CQ40-300',2999,7,'Notebooks','Intel Core i3',150);
INSERT INTO Marcas(Nombre) VALUES('Apple');
INSERT INTO Marcas(Nombre) VALUES('Samsung');
INSERT INTO Marcas(Nombre) VALUES('Huawei');
INSERT INTO Marcas(Nombre) VALUES('LG');
INSERT INTO Marcas(Nombre) VALUES('Motorola');
INSERT INTO Marcas(Nombre) VALUES('Google');
INSERT INTO Marcas(Nombre) VALUES('HP');
INSERT INTO Marcas(Nombre) VALUES('Epson');
INSERT INTO Marcas(Nombre) VALUES('Kodak');

-- Consulto ambas Tablas
SELECT * from Productos;
SELECT * from Marcas;

-- -----------------------------------------------------------------------------------------
-- Consulta de mas de una tabla
-- -----------------------------------------------------------------------------------------

-- ------------------------------------------
-- Producto Cartesiano
-- ------------------------------------------
SELECT * FROM Productos, Marcas;

-- ------------------------------------------
-- Composición Interna
-- ------------------------------------------
SELECT * 
FROM Productos, Marcas 
WHERE Productos.Marca = Marcas.idMarca;

-- Con alias en las tablas
SELECT * 
FROM Productos p, Marcas m 
WHERE p.Marca = m.idMarca;

-- Utilizando INNER JOIN
SELECT * 
FROM Productos p 
INNER JOIN Marcas m ON p.Marca = m.idMarca;

-- Para demostrar que no hay restriccion en la relacion de ambas tablas
-- Actualizar un producto a una marca que no existe
UPDATE Productos SET Marca=99 WHERE idProducto=4;

-- Volver
UPDATE Productos SET Marca=2 WHERE idProducto=4;

-- -----------------------------------------------------------------------------------------
-- Modelo Entidad Relación
-- -----------------------------------------------------------------------------------------

-- Clave Foranea
ALTER TABLE Productos 
ADD FOREIGN KEY (Marca) REFERENCES Marcas(idMarca) 
ON DELETE CASCADE 
ON UPDATE CASCADE;

-- Ahora con clave foranea
-- Actualizar un producto a una marca que no existe
UPDATE Productos SET Marca=99 WHERE idProducto=4;

-- Para mostrar los CASCADE
-- Eliminar una marca y mostrar como quedan los productos
DELETE FROM Marcas WHERE idMarca=4;

SELECT * FROM Marcas;
SELECT * FROM Productos;


