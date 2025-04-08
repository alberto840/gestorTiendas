export interface Producto {
    id?: number;
    categoria_id: number;
    sku: string; //Se genera automáticamente
    nombre: string;
    descripcion?: string;
    margen?: number; //Opcional
    unidad_medida: string;
    costo_promedio: number; //Se calcula automáticamente
    precio_actual: number;
    stock_minimo?: number; //Aun no hacerlo
    fecha_vencimiento?: Date; //Es en el lote
    estado: boolean;
    marca: string; //Opcional
  }