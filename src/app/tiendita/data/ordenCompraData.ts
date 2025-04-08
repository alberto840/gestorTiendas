import { OrdenCompra } from "../models/ordenCompra.model";

export const ordenesCompraEjemplo: OrdenCompra[] = [
    {
      id: 1,
      cantidad: 100,          // 100 kg de arroz
      moneda: "MXN",
      fecha_orden: new Date('2024-03-01'),
      personal_id: 201,      // Encargado de compras: Luis Martínez
      proveedores_id: 1,     // Distribuidora Alimentos S.A.
      vendedores_id: 301,    // Representante: Carlos Rojas
      productos_id: 1,       // Arroz Extra 1kg
      costo_total: 1850.00   // 100 × $18.50
    },
    {
      id: 2,
      cantidad: 200,          // 200 litros de aceite
      moneda: "USD",
      fecha_orden: new Date('2024-03-15'),
      personal_id: 202,      // Subgerente: Ana García
      proveedores_id: 3,     // Aceitera Nacional
      vendedores_id: 302,    // Vendedor: Jorge Méndez
      productos_id: 4,       // Aceite Vegetal 1L
      costo_total: 5000.00  // 200 × $25.00
    },
    {
      id: 3,
      cantidad: 50,           // 50 cajas de leche
      fecha_orden: new Date('2024-04-02'),
      personal_id: 203,      // Auxiliar: Pedro Sánchez
      proveedores_id: 2,     // Lácteos del Valle
      vendedores_id: 303,    // Vendedora: Fernanda López
      productos_id: 3        // Leche Entera 1L
    },
    {
      id: 4,
      cantidad: 500,          // 500 kg de azúcar
      moneda: "MXN",
      fecha_orden: new Date('2024-04-10'),
      personal_id: 201,      // Encargado de compras
      proveedores_id: 4,     // Ingenio Azucarero
      vendedores_id: 304,    // Representante: Diego Cruz
      productos_id: 5,       // Azúcar Estándar 1kg
      costo_total: 6250.00  // 500 × $12.50
    },
    {
      id: 5,
      cantidad: 80,           // 80 paquetes de jabón
      fecha_orden: new Date('2024-04-18'),
      personal_id: 204,      // Almacenista: Mariana Torres
      proveedores_id: 5,     // Limpieza Total S.A.
      vendedores_id: 305,    // Vendedor: Roberto Núñez
      productos_id: 6        // Jabón en polvo 1kg
    }
  ];