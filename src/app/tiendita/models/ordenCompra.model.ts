export interface OrdenCompra {
    id: number;
    cantidad: number;
    moneda?: string;
    fecha_orden: Date;
    personal_id: number;
    proveedores_id: number;
    vendedores_id: number;
    productos_id: number;
    costo_total?: number;
  }