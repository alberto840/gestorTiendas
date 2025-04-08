import { Merma } from "../models/merma.model";

export const mermasEjemplo: Merma[] = [
    {
      id: 1,
      cantidad: 5,               // 5kg perdidos
      lotes_inventario_id: 101   // Lote de arroz (ID 101)
    },
    {
      id: 2,
      cantidad: 3,               // 3 litros dañados
      lotes_inventario_id: 103   // Lote de leche (ID 103)
    },
    {
      id: 3,
      cantidad: 2,               // 2 litros derramados
      lotes_inventario_id: 104   // Lote de aceite (ID 104)
    },
    {
      id: 4,
      cantidad: 8,               // 8kg contaminados
      lotes_inventario_id: 105   // Lote de azúcar (ID 105)
    },
    {
      id: 5,
      cantidad: 10,              // 10 paquetes de galletas rotos
      lotes_inventario_id: 106   // Lote de galletas (ID hipotético 106)
    }
  ];