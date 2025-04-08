import { DragDropModule } from "@angular/cdk/drag-drop";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatNativeDateModule, MatRippleModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";
import { CajaRegistradoraAddComponent } from './tiendaAdmin/cajaRegistradora/caja-registradora-add/caja-registradora-add.component';
import { HeaderComponent } from "./interfaz/header/header.component";
import { MenuComponent } from "./interfaz/menu/menu.component";
import { SublevelMenuComponent } from "./interfaz/menu/sublevel-menu.component";
import { BellIconComponent } from "./interfaz/icons/bell-icon/bell-icon.component";
import { EmailIconComponent } from "./interfaz/icons/email-icon/email-icon.component";
import { GlobeIconComponent } from "./interfaz/icons/globe-icon/globe-icon.component";
import { CsvIconComponent } from "./interfaz/icons/csv-icon/csv-icon.component";
import { FilterIconComponent } from "./interfaz/icons/filter-icon/filter-icon.component";
import { PdfIconComponent } from "./interfaz/icons/pdf-icon/pdf-icon.component";
import { PrinterIconComponent } from "./interfaz/icons/printer-icon/printer-icon.component";
import { CopyrightComponent } from "./interfaz/copyright/copyright.component";
import { CategoriaProductoAddComponent } from './tiendaAdmin/categoriaProducto/categoria-producto-add/categoria-producto-add.component';
import { ClienteAddComponent } from './tiemdaEmpleado/cliente/cliente-add/cliente-add.component';
import { ClienteListComponent } from './tiemdaEmpleado/cliente/cliente-list/cliente-list.component';
import { DetalleVentaListComponent } from './tiemdaEmpleado/venta/detalle-venta-list/detalle-venta-list.component';
import { VentaListComponent } from './tiemdaEmpleado/venta/venta-list/venta-list.component';
import { VentaPerdidaComponent } from './tiemdaEmpleado/venta/venta-perdida/venta-perdida.component';
import { ProveedorListComponent } from './tiemdaEmpleado/proveedor/proveedor-list/proveedor-list.component';
import { ProveedorAddComponent } from './tiemdaEmpleado/proveedor/proveedor-add/proveedor-add.component';
import { VendedorListComponent } from './tiemdaEmpleado/proveedor/vendedor-list/vendedor-list.component';
import { VendedorAddComponent } from './tiemdaEmpleado/proveedor/vendedor-add/vendedor-add.component';
import { OrdenCompraAddComponent } from './tiemdaEmpleado/pedidos/orden-compra-add/orden-compra-add.component';
import { OrdenCompraListComponent } from './tiemdaEmpleado/pedidos/orden-compra-list/orden-compra-list.component';
import { GestionMermaComponent } from './tiemdaEmpleado/pedidos/gestion-merma/gestion-merma.component';
import { LoteListComponent } from './tiemdaEmpleado/pedidos/lote-list/lote-list.component';
import { ProductoAddComponent } from './tiemdaEmpleado/producto/producto-add/producto-add.component';
import { ProductoListComponent } from './tiemdaEmpleado/producto/producto-list/producto-list.component';
import { RecepcionMercanciaListComponent } from './tiemdaEmpleado/pedidos/recepcion-mercancia-list/recepcion-mercancia-list.component';
import { GestionEmpleadosComponent } from './tiendaAdmin/gestion-empleados/gestion-empleados.component';
import { LoginComponent } from "./interfaz/login/login.component";
import { EmpleadoAddComponent } from './tiendaAdmin/empleado-add/empleado-add.component';
import { RecibirMercanciaComponent } from './tiemdaEmpleado/pedidos/recibir-mercancia/recibir-mercancia.component';
import { VentaAddComponent } from './tiemdaEmpleado/venta/venta-add/venta-add.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatNativeDateModule,
    MatRippleModule,
    MatSortModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatExpansionModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatCardModule,
    MatListModule,
    NgApexchartsModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    HttpClientModule,
    MatTableModule,
    DragDropModule,
  ],
  declarations: [
    FilterIconComponent,
    PdfIconComponent,
    CsvIconComponent,
    PrinterIconComponent,
    BellIconComponent,
    EmailIconComponent,
    GlobeIconComponent,
    CopyrightComponent,
    CajaRegistradoraAddComponent,
    HeaderComponent,
    MenuComponent,
    SublevelMenuComponent,
    CategoriaProductoAddComponent,
    ClienteAddComponent,
    ClienteListComponent,
    DetalleVentaListComponent,
    VentaListComponent,
    VentaPerdidaComponent,
    ProveedorListComponent,
    ProveedorAddComponent,
    VendedorListComponent,
    VendedorAddComponent,
    OrdenCompraAddComponent,
    OrdenCompraListComponent,
    GestionMermaComponent,
    LoteListComponent,
    ProductoAddComponent,
    ProductoListComponent,
    RecepcionMercanciaListComponent,
    GestionEmpleadosComponent,
    LoginComponent,
    EmpleadoAddComponent,
    RecibirMercanciaComponent,
    VentaAddComponent,
  ],
})
export class tienditaModule { }