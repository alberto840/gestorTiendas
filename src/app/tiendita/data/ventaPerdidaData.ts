import { VentaPerdida } from "../models/venta-perdida.model";

export const ventasPerdidasEjemplo: VentaPerdida[] = [
    {
      id: 1,
      producto_id: 1,       // Arroz Extra 1kg
      cantidad_solicitada: 10,  // Cliente solicitó 10kg (solo había 5 en stock)
      ventas_id: 1001       // Venta cancelada por falta de inventario
    },
    {
      id: 2,
      producto_id: 3,       // Leche Entera 1L
      cantidad_solicitada: 20,  // Restaurante requirió 20 litros (producto caducado)
      ventas_id: 1005       // Venta rechazada por calidad
    },
    {
      id: 3,
      producto_id: 4,       // Aceite Vegetal 1L
      cantidad_solicitada: 15,  // Pedido de 15 litros no surtido (daño en transporte)
      ventas_id: 1008       // Venta no completada
    },
    {
      id: 4,
      producto_id: 5,       // Azúcar Estándar 1kg
      cantidad_solicitada: 8,   // Error en sistema mostró inventario inexistente
      ventas_id: 1012       // Transacción anulada
    },
    {
      id: 5,
      producto_id: 6,       // Jabón en polvo 1kg
      cantidad_solicitada: 25,  // Proveedor no entregó a tiempo
      ventas_id: 1015       // Pedido postergado indefinidamente
    }
  ];