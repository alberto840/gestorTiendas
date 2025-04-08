export interface Vendedor {
    id: number;
    nombre: string;
    celular_1: string;
    celular_2?: string;
    mail?: string;
    estado: boolean;
    zona_trabajo?: string;
  }