import { Producto } from "../models/producto.model";

export const productosEjemplo: Producto[] = [
    {
      id: 1,
      categoria_id: 2,
      sku: 'AB-ARROZ-1',
      nombre: 'Arroz Extra 1kg',
      descripcion: 'Arroz grano largo',
      margen: 30.0,
      unidad_medida: 'kg',
      costo_promedio: 18.50,
      precio_actual: 24.00,
      stock_minimo: 20,
      estado: true,
      marca: 'La Merced'
    },
    {
      id: 2,
      categoria_id: 2,
      sku: 'AB-FRIJOL-2',
      nombre: 'Frijol Negro 1kg',
      unidad_medida: 'kg',
      costo_promedio: 22.00,
      precio_actual: 28.50,
      estado: true,
      marca: 'La Huerta'
    },
    {
      id: 3,
      categoria_id: 3,
      sku: 'LT-LECHE-3',
      nombre: 'Leche Entera 1L',
      unidad_medida: 'litro',
      costo_promedio: 15.00,
      precio_actual: 19.90,
      estado: true,
      marca: 'Alpura'
    },
    {
      id: 4,
      categoria_id: 4,
      sku: 'OL-ACEITE-4',
      nombre: 'Aceite Vegetal 1L',
      unidad_medida: 'litro',
      costo_promedio: 25.00,
      precio_actual: 32.00,
      estado: true,
      marca: 'Capullo'
    },
    {
      id: 5,
      categoria_id: 5,
      sku: 'DL-AZUCA-5',
      nombre: 'Azúcar Estándar 1kg',
      unidad_medida: 'kg',
      costo_promedio: 12.50,
      precio_actual: 16.00,
      estado: true,
      marca: 'Zulka'
    }
  ];