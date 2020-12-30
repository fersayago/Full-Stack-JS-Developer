package OOP;

public class Carrito {
	
	//atributos
	item[] items;
	String usuario;
	String fechaCreacion;
	String cupon;
	String voucher;
	
	
	//clases
	Carrito(){
		this.fechaCreacion = "28/12/2020";		
	}
	
	//metodos
	void limpiarPedido() {
		this.items = null;
	}
	
	void aplicarCupon(String cupon) {
		this.cupon = cupon;		
	}
	
	void aplicarVoucher(String voucher) {
		this.voucher = voucher;
	}
	
	void eliminarItem(Articulo articulo) {
		for (item item : this.items) {
			if (item.articulo.equals(articulo)) {
				//completar!
			}
		}
	}
	
	void agregarArticulo(Articulo articulo, int cantidad) {
		item itemActualizar = null;
		for (item item : this.items) {
			if (item.articulo.equals(articulo)) {
				itemActualizar = item;
			}
		}
		
		if (itemActualizar != null) {
			itemActualizar.actualizar(cantidad);
		}else {
			item nuevoItem = new item(articulo, cantidad);
			//agregar a la lista de items en Java!
		}
	}
}
