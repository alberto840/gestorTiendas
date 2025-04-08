import { TiendaProducto } from "../models/tienda-producto.model";

export const tiendasProductosEjemplo: TiendaProducto[] = [
    {
      id: 1,
      tiendas_id: 1,     // Sucursal Centro
      productos_id: 1     // Arroz Extra 1kg
    },
    {
      id: 2,
      tiendas_id: 2,     // Sucursal Norte
      productos_id: 4     // Aceite Vegetal 1L
    },
    {
      id: 3,
      tiendas_id: 3,     // Sucursal Sur
      productos_id: 3     // Leche Entera 1L
    },
    {
      id: 4,
      tiendas_id: 1,     // Sucursal Centro
      productos_id: 6     // Jabón en polvo 1kg
    },
    {
      id: 5,
      tiendas_id: 2,     // Sucursal Norte
      productos_id: 5     // Azúcar Estándar 1kg
    }
  ];