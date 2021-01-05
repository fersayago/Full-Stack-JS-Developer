package oop.cuenta;

public class Programa {
	
	public static void main (String[] args) {
		Cuenta ctaAgustina = new Cuenta (100000);
		
		Cuenta ctaCamila = new Cuenta (100000);
		
		ctaAgustina.extraer(200000);
		
		ctaCamila.transferir(500000);
	}

}
