import { Venta } from "../models/venta.model";

export const ventasEjemplo: Venta[] = [
    {
      id: 1,
      total: 345.50,
      clientes_id: 1,       // Doña Luisa (cliente frecuente)
      fecha: new Date('2024-03-15'),
      personal_id: 2        // Cajero Juan Morales
    },
    {
      id: 2,
      total: 1200.00,
      clientes_id: 2,       // Tienda La Esquina
      fecha: new Date('2024-03-16'),
      personal_id: 3        // Almacenista Ana Ramírez
    },
    {
      id: 3,
      total: 854.75,
      clientes_id: 3,       // Mini-super El Económico
      fecha: new Date('2024-03-17'),
      personal_id: 1        // Gerente María Hernández
    },
    {
      id: 4,
      total: 432.90,
      clientes_id: 4,       // Cafetería Aroma Fresco
      fecha: new Date('2024-03-18'),
      personal_id: 5        // Cajera Lucía Castro
    },
    {
      id: 5,
      total: 678.30,
      clientes_id: 5,       // Escuela Primaria "Juárez"
      fecha: new Date('2024-03-19'),
      personal_id: 2        // Cajero Juan Morales
    }
  ];