import { Proveedor } from "../models/proveedor.model";

export const proveedoresEjemplo: Proveedor[] = [
    {
      id: 1,
      nombre: "Distribuciones Alimenticias Mérida",
      terminos_pago: "30 días crédito",
      nit: "DAM-23051991",
      estado: true,
      celular_1: "5551234567",
      celular_2: "5552345678",
      email: "ventas@dam.com.mx"
    },
    {
      id: 2,
      nombre: "Lácteos del Valle de México",
      nit: "LVM-12041985",
      estado: true,
      celular_1: "5553456789",
      celular_2: "5554567890",
      email: "pedidos@lacteosdelvalle.mx"
    },
    {
      id: 3,
      nombre: "Abarrotes Don Pepe",
      terminos_pago: "Contado al recibir",
      nit: "ADP-08081976",
      estado: true,
      celular_1: "5559876543",
      celular_2: "5558765432",
      email: "donpepe.abarrotes@hotmail.com"
    },
    {
      id: 4,
      nombre: "Productos de Limpieza Total",
      nit: "PLT-15022000",
      estado: false,  // Proveedor inactivo temporalmente
      celular_1: "5551122334",
      celular_2: "5552233445",
      email: "soporte@productoslimpieza.com"
    },
    {
      id: 5,
      nombre: "Importadora de Café Oaxaca",
      terminos_pago: "50% anticipo, 50% contra entrega",
      nit: "ICO-01011980",
      estado: true,
      celular_1: "5556677889",
      celular_2: "5557788990",
      email: "importadora.cafeoax@proveedor.mx"
    }
  ];