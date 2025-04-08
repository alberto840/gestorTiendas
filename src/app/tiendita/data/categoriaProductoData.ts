import { CategoriaProducto } from "../models/categoriaProducto.model";

export const categoriasEjemplo: CategoriaProducto[] = [
    {
      id: 1,
      nombre: "Abarrotes",
      prefijo_sku: "AB"
    },
    {
      id: 2,
      categoria_padre_id: 1, // Subcategoría de Abarrotes
      nombre: "Granos básicos",
      prefijo_sku: "GR"
    },
    {
      id: 3,
      categoria_padre_id: 1, // Subcategoría de Abarrotes
      nombre: "Enlatados",
      prefijo_sku: "EN"
    },
    {
      id: 4,
      nombre: "Lácteos",
      prefijo_sku: "LT"
    },
    {
      id: 5,
      nombre: "Artículos de limpieza",
      prefijo_sku: "AL"
    }
  ];