import { VendedorCategoriaProducto } from "../models/vendedor-categoria-producto.model";

export const vendedoresCategoriasEjemplo: VendedorCategoriaProducto[] = [
    {
      id: 1,
      vendedores_id: 201,    // Juan Pérez - Especialista en granos
      categorias_productos_id: 2  // Granos básicos
    },
    {
      id: 2,
      vendedores_id: 202,    // María López - Especialista en lácteos
      categorias_productos_id: 4  // Lácteos
    },
    {
      id: 3,
      vendedores_id: 203,    // Carlos Ruiz - Encargado de enlatados
      categorias_productos_id: 3  // Enlatados
    },
    {
      id: 4,
      vendedores_id: 204,    // Ana Martínez - Responsable de limpieza
      categorias_productos_id: 5  // Artículos de limpieza
    },
    {
      id: 5,
      vendedores_id: 205,    // Luis García - Vendedor generalista
      categorias_productos_id: 1  // Abarrotes (categoría padre)
    }
  ];