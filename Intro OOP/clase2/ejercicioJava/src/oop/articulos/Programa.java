package oop.articulos;

public class Programa {
	
	public static void main(String[] args) {
		Articulo primero = new Articulo ("Harry Potter", 630, null, null);
	
		//CREO IMAGEN PARA EL SEGUNDO LIBRO
		Imagen imagenSegundo = new Imagen ("www.urldelaimagen.com/imagen.jpg", false);
		
		Articulo segundo = new Articulo ("Harry Potter 2", 2390, "varios autores", imagenSegundo);
		
		primero.detalle();
		
		segundo.detalle();
	}

}
