export interface Cliente {
    id: number;
    nombre?: string;
    limite_credito: number;
    saldo_actual?: number;
    terminos_pago?: string;
    celular_1: string;
    celular_2: string;
    direccion: string;
    ci: string;
    nombre_garante: string;
    celular_garante: string;
  }