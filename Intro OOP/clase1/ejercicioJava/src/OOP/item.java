package OOP;

public class item {
	
	//atributos
	Articulo articulo;
	int cantidad;
	float precioUnitario;
	float subTotal;
	
	//constructor
	item(Articulo articulo, int cantidad){
		this.articulo = articulo;
		this.cantidad = cantidad;
		this.precioUnitario = articulo.precio;
		this.subTotal = precioUnitario * cantidad;
	}
	
	//metodos
	void actualizar(int cantidad){
		this.cantidad = cantidad;
		this.subTotal = this.precioUnitario * cantidad;	
	}
}
