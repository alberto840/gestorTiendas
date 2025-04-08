export interface LoteInventario {
    id: number;
    producto_id: number;
    cantidad: number;
    cantidad_gratis?: number;
    costo_unitario?: number;
    fecha_compra: Date;
    fecha_vencimiento?: Date;
    cantidad_restante?: number;
    tasas_cambio_id: number;
    costo_total: number;
    vendedores_id: number;
    proveedores_id: number;
  }