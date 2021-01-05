package oop.articulos;

import java.util.ArrayList;
import java.util.List;

public class Articulo {
	
	private String titulo;
	private String autor;
	private float precio;
	private Imagen imagenPpal;
	private List<Imagen> imagenes;
	private int cantMaxImagenes;
	
	public Articulo(String titulo, float precio, String autor, Imagen imagenPpal) {
		this.titulo =  titulo;
		this.precio = precio;
		this.autor = autor;
		this.imagenPpal = imagenPpal;
		this.imagenes = new ArrayList<Imagen>();
		this.cantMaxImagenes = 5;
	}
	
	public void agregarImagen(Imagen nuevaImagen) {
		if (this.imagenes.size() < this.cantMaxImagenes) {			
		this.imagenes.add(nuevaImagen);
		}else {
			System.out.println("No se pueden aghregar mas imagenes. Cantidad maxima: " + this.cantMaxImagenes);
		}
	}
	
	public void detalle() {
		System.out.println("Titulo: " + this.titulo);
		System.out.println("Autor: " + this.autor);
		System.out.println("Precio: " + this.precio);
		if (this.imagenPpal != null) {			
			this.imagenPpal.mostrar();
		}
		//USAR UN FOREACH PARA IMAGENES
		if (this.imagenes != null) {
			for (Imagen imagen : this.imagenes) {
				imagen.mostrar();
			}
		}
	}
	

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getAutor() {
		return autor;
	}

	public void setAutor(String autor) {
		this.autor = autor;
	}

	public float getPrecio() {
		return precio;
	}

	public void setPrecio(float precio) {
		this.precio = precio;
	}

	public Imagen getImagenPpal() {
		return imagenPpal;
	}

	public void setImagenPpal(Imagen imagenPpal) {
		this.imagenPpal = imagenPpal;
	}

	public List<Imagen> getImagenes() {
		return imagenes;
	}

	public void setImagenes(List<Imagen> imagenes) {
		this.imagenes = imagenes;
	}

	public int getCantMaxImagenes() {
		return cantMaxImagenes;
	}

	public void setCantMaxImagenes(int cantMaxImagenes) {
		this.cantMaxImagenes = cantMaxImagenes;
	}
	
	

}
