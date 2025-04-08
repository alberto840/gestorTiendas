import { DetalleVenta } from "../models/detalleVenta.model";

export const detallesVentaEjemplo: DetalleVenta[] = [
    {
      id: 1,
      venta_id: 1,       // Venta 1 - Ticket 001
      producto_id: 1,     // Arroz Extra 1kg
      cantidad: 5,        // 5kg
      precio_unitario: 24.00,
      lotes_inventario_id: 101 // Lote de compra 101
    },
    {
      id: 2,
      venta_id: 1,       // Venta 1 - Ticket 001
      producto_id: 3,     // Leche Entera 1L
      cantidad: 3,        // 3 litros
      precio_unitario: 19.90,
      lotes_inventario_id: 103 // Lote de compra 103
    },
    {
      id: 3,
      venta_id: 2,       // Venta 2 - Ticket 002
      producto_id: 2,     // Frijol Negro 1kg
      cantidad: 10,       // 10kg
      precio_unitario: 28.50,
      lotes_inventario_id: 102 // Lote de compra 102
    },
    {
      id: 4,
      venta_id: 3,       // Venta 3 - Ticket 003
      producto_id: 4,     // Aceite Vegetal 1L
      cantidad: 2,        // 2 litros
      precio_unitario: 32.00,
      lotes_inventario_id: 104 // Lote de compra 104
    },
    {
      id: 5,
      venta_id: 3,       // Venta 3 - Ticket 003
      producto_id: 5,     // Azúcar Estándar 1kg
      cantidad: 8,        // 8kg
      precio_unitario: 16.00,
      lotes_inventario_id: 105 // Lote de compra 105
    }
  ];