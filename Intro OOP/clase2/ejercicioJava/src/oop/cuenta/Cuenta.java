package oop.cuenta;

public class Cuenta {
	
	private float saldo;
	private float limiteTransfDiario;
	private float limiteExtrDiario;
	
	public Cuenta(float saldoInicial) {
		this.saldo = saldoInicial;
	}
	
	public float consultarSaldo() {
		return this.saldo;
	}
	
	public void transferir (float monto) {
		if (monto < limiteTransfDiario) {
			this.saldo += monto;
		}else {
			System.out.println("Ha siperado el lomite diario: "+ this.limiteTransfDiario);
		}
	}
	
	public float extraer(float monto) {
		if (this.saldo > monto && monto < limiteExtrDiario) {
			this.saldo -= monto;
		}else {
			System.out.println("No hay fondos suficientes");
		}
		return this.saldo;
	}
	

}
