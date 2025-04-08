export interface RecepcionMercancia {
    id: number;
    orden_id: number;
    cantidad_recibida: number;
    cantidad_defectuosa?: number;
    fecha_recepcion: Date;
    notas?: string;
    personal_id: number;
  }