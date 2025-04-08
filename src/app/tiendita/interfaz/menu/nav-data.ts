import { INavbarData } from './helper';

export const navbarData: INavbarData[] = [
  {
    routeLink: 'admin',
    icon: 'fas fa-user-tie',
    label: 'Administrador',
    items: [
      {
        routeLink: '/caja/gestion',
        label: 'Gestion Cajas',
      },
      {
        routeLink: '/categoria/gestion',
        label: 'Gestion Categorias',
      },
      {
        routeLink: '/empleados/lista',
        label: 'Lista Empleados',
      },
      {
        routeLink: '/empleados/registro',
        label: 'Registro Empleados',
      },
    ],
  },
  {
    routeLink: 'Ventas',
    icon: 'fas fa-box-open',
    label: 'Ventas',
    items: [
      {
        routeLink: '/venta/vender',
        label: 'Vender Productos',
      },
      {
        routeLink: '/venta/detalle',
        label: 'Ventas Detalle',
      },
      {
        routeLink: '/venta/lista',
        label: 'Lista Ventas',
      },
      {
        routeLink: '/venta/perdida',
        label: 'Ventas Perdidas',
      },
    ],
  },
  {
    routeLink: 'Productos',
    icon: 'fas fa-box-open',
    label: 'Productos',
    items: [
      {
        routeLink: '/productos/lotes',
        label: 'Lotes',
      },
      {
        routeLink: '/productos/registro',
        label: 'Registro Productos',
      },
      {
        routeLink: '/productos/lista',
        label: 'Lista Productos',
      },
    ],
  },
  {
    routeLink: 'Proveedores',
    icon: 'fas fa-truck',
    label: 'Proveedores',
    items: [
      {
        routeLink: '/proveedor/registro',
        label: 'Registro Proveedor',
      },
      {
        routeLink: '/proveedor/lista',
        label: 'Lista Proveedor',
      },
      {
        routeLink: '/proveedor/vendedor',
        label: 'Registro Vendedor',
      },
      {
        routeLink: '/proveedor/vendedores',
        label: 'Lista Vendedores',
      }
    ],
  },
  {
    routeLink: 'Pedidos',
    icon: 'fas fa-parachute-box',
    label: 'Pedidos',
    items: [
      {
        routeLink: '/pedidos/orden-registro',
        label: 'Registro Orden',
      },
      {
        routeLink: '/pedidos/orden-lista',
        label: 'Lista Orden/Pedidos',
      },
      {
        routeLink: '/pedidos/recepcion',
        label: 'Recepcion Mercancia',
      },
      {
        routeLink: '/pedidos/merma',
        label: 'Gestion Merma',
      },
    ],
  },
  {
    routeLink: 'clientes',
    icon: 'fas fa-users',
    label: 'Clientes',
    items: [
      {
        routeLink: '/cliente',
        label: 'Registro Cliente',
      },
      {
        routeLink: '/clientes',
        label: 'Lista Clientes',
      },
    ],
  },
];
