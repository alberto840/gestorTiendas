import { Personal } from "../models/personal.model";

export const personalEjemplo: Personal[] = [
    {
      id: 1,
      tienda_id: 1,       // Sucursal Centro
      nombre: "María Guadalupe Hernández",
      rol_id: 3           // Rol 3 = Gerente de Tienda
    },
    {
      id: 2,
      tienda_id: 2,       // Sucursal Norte
      nombre: "Juan Carlos Morales",
      rol_id: 1           // Rol 1 = Cajero
    },
    {
      id: 3,
      tienda_id: 3,       // Sucursal Sur
      nombre: "Ana Isabel Ramírez",
      rol_id: 2           // Rol 2 = Almacenista
    },
    {
      id: 4,
      tienda_id: 1,       // Sucursal Centro
      nombre: "Pedro Armando Sánchez",
      rol_id: 4           // Rol 4 = Auxiliar de Compras
    },
    {
      id: 5,
      tienda_id: 2,       // Sucursal Norte
      nombre: "Lucía Fernanda Castro",
      rol_id: 1           // Rol 1 = Cajero
    }
  ];