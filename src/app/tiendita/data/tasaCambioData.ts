import { TasaCambio } from "../models/tasa-cambio.model";

export const tasasCambioEjemplo: TasaCambio[] = [
    {
      id: 1,
      moneda_origen: "USD",
      moneda_destino: "MXN",
      tasa: 17.25,       // 1 USD = 17.25 MXN
      monedas_codigo: "MXN"
    },
    {
      id: 2,
      moneda_origen: "MXN",
      moneda_destino: "USD",
      tasa: 0.058,       // 1 MXN = 0.058 USD
      monedas_codigo: "USD"
    },
    {
      id: 3,
      moneda_origen: "EUR",
      moneda_destino: "MXN",
      tasa: 18.50,       // 1 EUR = 18.50 MXN
      monedas_codigo: "MXN"
    },
    {
      id: 4,
      moneda_origen: "GBP",
      moneda_destino: "MXN",
      tasa: 21.80,       // 1 GBP = 21.80 MXN
      monedas_codigo: "MXN"
    },
    {
      id: 5,
      moneda_origen: "CAD",
      moneda_destino: "MXN",
      tasa: 12.90,       // 1 CAD = 12.90 MXN
      monedas_codigo: "MXN"
    }
  ];