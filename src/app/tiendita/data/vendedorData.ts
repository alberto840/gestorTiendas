import { Vendedor } from "../models/vendedor.model";

export const vendedoresEjemplo: Vendedor[] = [
    {
      id: 1,
      nombre: "Juan Carlos Mendoza",
      celular_1: "55 1234 5678",
      celular_2: "55 8765 4321",
      mail: "jc.mendoza@proveedor.mx",
      estado: true,
      zona_trabajo: "Centro y Occidente"
    },
    {
      id: 2,
      nombre: "María Fernanda López",
      celular_1: "55 2345 6789",
      mail: "mflopez@lacteosdelvalle.com",
      estado: true,
      zona_trabajo: "Zona Metropolitana"
    },
    {
      id: 3,
      nombre: "Roberto Sánchez Cruz",
      celular_1: "55 3456 7890",
      celular_2: "55 6677 8899",
      estado: false,  // Vendedor inactivo
      zona_trabajo: "Norte del País"
    },
    {
      id: 4,
      nombre: "Ana Patricia Ramírez",
      celular_1: "55 4455 6677",
      mail: "aramirez@importaciones.mx",
      estado: true,
      zona_trabajo: "Sureste"
    },
    {
      id: 5,
      nombre: "Luis Armando Torres",
      celular_1: "55 5566 7788",
      estado: true,
      zona_trabajo: "Bajío"
    }
  ];