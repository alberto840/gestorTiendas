import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './tiendita/interfaz/login/login.component';
import { ClienteAddComponent } from './tiendita/tiemdaEmpleado/cliente/cliente-add/cliente-add.component';
import { ClienteListComponent } from './tiendita/tiemdaEmpleado/cliente/cliente-list/cliente-list.component';
import { GestionMermaComponent } from './tiendita/tiemdaEmpleado/pedidos/gestion-merma/gestion-merma.component';
import { LoteListComponent } from './tiendita/tiemdaEmpleado/pedidos/lote-list/lote-list.component';
import { OrdenCompraAddComponent } from './tiendita/tiemdaEmpleado/pedidos/orden-compra-add/orden-compra-add.component';
import { OrdenCompraListComponent } from './tiendita/tiemdaEmpleado/pedidos/orden-compra-list/orden-compra-list.component';
import { RecepcionMercanciaListComponent } from './tiendita/tiemdaEmpleado/pedidos/recepcion-mercancia-list/recepcion-mercancia-list.component';
import { ProductoAddComponent } from './tiendita/tiemdaEmpleado/producto/producto-add/producto-add.component';
import { ProductoListComponent } from './tiendita/tiemdaEmpleado/producto/producto-list/producto-list.component';
import { ProveedorAddComponent } from './tiendita/tiemdaEmpleado/proveedor/proveedor-add/proveedor-add.component';
import { ProveedorListComponent } from './tiendita/tiemdaEmpleado/proveedor/proveedor-list/proveedor-list.component';
import { VendedorAddComponent } from './tiendita/tiemdaEmpleado/proveedor/vendedor-add/vendedor-add.component';
import { VendedorListComponent } from './tiendita/tiemdaEmpleado/proveedor/vendedor-list/vendedor-list.component';
import { DetalleVentaListComponent } from './tiendita/tiemdaEmpleado/venta/detalle-venta-list/detalle-venta-list.component';
import { VentaListComponent } from './tiendita/tiemdaEmpleado/venta/venta-list/venta-list.component';
import { VentaPerdidaComponent } from './tiendita/tiemdaEmpleado/venta/venta-perdida/venta-perdida.component';
import { CajaRegistradoraAddComponent } from './tiendita/tiendaAdmin/cajaRegistradora/caja-registradora-add/caja-registradora-add.component';
import { CategoriaProductoAddComponent } from './tiendita/tiendaAdmin/categoriaProducto/categoria-producto-add/categoria-producto-add.component';
import { GestionEmpleadosComponent } from './tiendita/tiendaAdmin/gestion-empleados/gestion-empleados.component';
import { EmpleadoAddComponent } from './tiendita/tiendaAdmin/empleado-add/empleado-add.component';
import { VentaAddComponent } from './tiendita/tiemdaEmpleado/venta/venta-add/venta-add.component';


const routes: Routes = [ 
  { path: '', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'cliente',
    component: ClienteAddComponent,
  },
  {
    path: 'clientes',
    component: ClienteListComponent,
  },
  {
    path: 'pedidos/merma',
    component: GestionMermaComponent,
  },
  {
    path: 'pedidos/orden-registro',
    component: OrdenCompraAddComponent,
  },
  {
    path: 'pedidos/orden-lista',
    component: OrdenCompraListComponent,
  },
  {
    path: 'pedidos/recepcion',
    component: RecepcionMercanciaListComponent,
  },
  {
    path: 'productos/lotes',
    component: LoteListComponent,
  },
  {
    path: 'productos/registro',
    component: ProductoAddComponent,
  },
  {
    path: 'productos/lista',
    component: ProductoListComponent,
  },
  {
    path: 'proveedor/registro',
    component: ProveedorAddComponent,
  },
  {
    path: 'proveedor/lista',
    component: ProveedorListComponent,
  },
  {
    path: 'proveedor/vendedor',
    component: VendedorAddComponent,
  },
  {
    path: 'proveedor/vendedores',
    component: VendedorListComponent,
  },
  {
    path: 'venta/detalle',
    component: DetalleVentaListComponent,
  },
  {
    path: 'venta/lista',
    component: VentaListComponent,
  },
  {
    path: 'venta/perdida',
    component: VentaPerdidaComponent,
  },
  {
    path: 'venta/vender',
    component: VentaAddComponent,
  },
  {
    path: 'caja/gestion',
    component: CajaRegistradoraAddComponent,
  },
  {
    path: 'categoria/gestion',
    component: CategoriaProductoAddComponent,
  },
  {
    path: 'empleados/lista',
    component: GestionEmpleadosComponent,
  },
  {
    path: 'empleados/registro',
    component: EmpleadoAddComponent,
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
