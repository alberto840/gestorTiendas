import { Cliente } from "../models/cliente.model";

export const clientesEjemplo: Cliente[] = [
    {
      id: 1,
      nombre: 'María González',
      limite_credito: 5000.00,
      celular_1: '5551234567',
      celular_2: '5557654321',
      direccion: 'Calle Primavera #123, Col. Centro',
      ci: 'GOMA800101123',
      nombre_garante: 'Juan Pérez',
      celular_garante: '5559876543'
    },
    {
      id: 2,
      nombre: 'Tienda La Esquina',
      limite_credito: 15000.00,
      celular_1: '5552345678',
      celular_2: '5558765432',
      direccion: 'Av. Reforma #456',
      ci: 'TIES850505456',
      nombre_garante: 'Pedro Martínez',
      celular_garante: '5556789123'
    },
    // ... 3 más siguiendo el mismo formato
  ];