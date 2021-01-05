package oop.articulos;

public class Imagen {
	
	private String url;
	private boolean marcaAgua;
	
	public Imagen (String url, boolean marcaAgua) {
		this.url = url;
		this.marcaAgua = marcaAgua;
	}
	
	public void mostrar() {
		System.out.println("URL: " + this.url);
		if (this.marcaAgua) {			
			System.out.println("Marca de Agua: SI");
		}else {
			System.out.println("Marca de Agua: NO");
		}
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public boolean isMarcaAgua() {
		return marcaAgua;
	}

	public void setMarcaAgua(boolean marcaAgua) {
		this.marcaAgua = marcaAgua;
	}

}
