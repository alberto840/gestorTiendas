import { RecepcionMercancia } from "../models/recepcionMercancia.model";

export const recepcionesMercanciaEjemplo: RecepcionMercancia[] = [
    {
      id: 1,
      orden_id: 1,               // Orden de arroz
      cantidad_recibida: 100,    // 100kg recibidos
      cantidad_defectuosa: 5,    // Paquetes mojados
      fecha_recepcion: new Date('2024-03-03'),
      notas: '5kg dañados por humedad en transporte',
      personal_id: 3             // Almacenista Ana Ramírez
    },
    {
      id: 2,
      orden_id: 2,               // Orden de aceite
      cantidad_recibida: 205,    // 205 litros (5 extra)
      fecha_recepcion: new Date('2024-03-18'),
      notas: 'Envío con 5 litros adicionales (promoción)',
      personal_id: 4             // Auxiliar Pedro Sánchez
    },
    {
      id: 3,
      orden_id: 3,               // Orden de leche
      cantidad_recibida: 45,     // 45/50 litros recibidos
      cantidad_defectuosa: 2,    // 2 botellas rotas
      fecha_recepcion: new Date('2024-04-03'),
      notas: 'Falta 1 caja (5 litros) y 2 unidades dañadas',
      personal_id: 2             // Cajero Juan Morales
    },
    {
      id: 4,
      orden_id: 4,               // Orden de azúcar
      cantidad_recibida: 500,    // 500kg completos
      cantidad_defectuosa: 8,    // Sacos húmedos
      fecha_recepcion: new Date('2024-04-12'),
      personal_id: 5             // Cajera Lucía Castro
    },
    {
      id: 5,
      orden_id: 5,               // Orden de jabón
      cantidad_recibida: 80,     // 80 unidades recibidas
      cantidad_defectuosa: 3,    // Empaques abiertos
      fecha_recepcion: new Date('2024-04-20'),
      notas: '3 paquetes con roturas menores',
      personal_id: 1             // Gerente María Hernández
    }
  ];