import { LoteInventario } from "../models/loteInventario.model";

export const lotesInventarioEjemplo: LoteInventario[] = [
    {
      id: 101,
      producto_id: 1,          // Arroz Extra 1kg
      cantidad: 100,
      cantidad_gratis: 5,      // 5kg gratis por promoción
      costo_unitario: 18.50,
      fecha_compra: new Date('2024-02-15'),
      fecha_vencimiento: new Date('2025-01-30'),
      cantidad_restante: 95,   // 100 - 5 vendidos
      tasas_cambio_id: 1,      // Tasa MXN-USD del día
      costo_total: 1850.00,    // (100 * 18.50)
      vendedores_id: 201,      // Vendedor Juan Pérez
      proveedores_id: 1        // Distribuidora Alimentos S.A.
    },
    {
      id: 102,
      producto_id: 2,          // Frijol Negro 1kg
      cantidad: 80,
      costo_unitario: 22.00,
      fecha_compra: new Date('2024-03-01'),
      cantidad_restante: 80,   // Sin ventas aún
      tasas_cambio_id: 1,
      costo_total: 1760.00,    // 80 * 22.00
      vendedores_id: 202,      // Vendedora María López
      proveedores_id: 1        // Distribuidora Alimentos S.A.
    },
    {
      id: 103,
      producto_id: 3,          // Leche Entera 1L
      cantidad: 50,
      costo_unitario: 15.00,
      fecha_compra: new Date('2024-03-10'),
      fecha_vencimiento: new Date('2024-04-05'), // Producto perecedero
      cantidad_restante: 47,   // 3 vendidos
      tasas_cambio_id: 1,
      costo_total: 750.00,     // 50 * 15.00
      vendedores_id: 203,      // Vendedor Carlos Ruiz
      proveedores_id: 2        // Lácteos del Valle
    },
    {
      id: 104,
      producto_id: 4,          // Aceite Vegetal 1L
      cantidad: 60,
      cantidad_gratis: 3,      // 3 litros de regalo
      costo_unitario: 25.00,
      fecha_compra: new Date('2024-02-28'),
      fecha_vencimiento: new Date('2025-06-01'),
      cantidad_restante: 60,   // Stock completo
      tasas_cambio_id: 1,
      costo_total: 1500.00,    // 60 * 25.00
      vendedores_id: 204,      // Vendedora Ana Martínez
      proveedores_id: 3        // Aceitera Nacional
    },
    {
      id: 105,
      producto_id: 5,          // Azúcar Estándar 1kg
      cantidad: 120,
      costo_unitario: 12.50,
      fecha_compra: new Date('2024-03-20'),
      cantidad_restante: 112,  // 8 vendidos
      tasas_cambio_id: 1,
      costo_total: 1500.00,    // 120 * 12.50
      vendedores_id: 205,      // Vendedor Luis García
      proveedores_id: 4        // Ingenio Azucarero
    }
  ];