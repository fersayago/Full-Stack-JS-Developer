package OOP;

public class Articulo {
	
	//atributos
	int id;
	String titulo;
	String[] autores;
	float precio;
	String imagenPpal;
	
	//constructor
	Articulo(String titulo, String[] autores, float precio) {
		this.titulo = titulo;
		this.autores = autores;
		this.precio = precio;
	
	}
	
	//metodos!
	void detalle() {
		System.out.println("Titulo:" + this.titulo);
		
		for (String autor: this.autores) {
			System.out.println(autor);
		}
		
		System.out.println("Precio:" + this.precio);
	}
}


