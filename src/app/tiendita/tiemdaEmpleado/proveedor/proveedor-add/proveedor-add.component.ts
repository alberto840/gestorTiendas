import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Proveedor } from 'src/app/tiendita/models/proveedor.model';

@Component({
  selector: 'app-proveedor-add',
  templateUrl: './proveedor-add.component.html',
  styleUrls: ['./proveedor-add.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ProveedorAddComponent implements OnInit {
  proveedor: Proveedor = {
    id: 0,
    nombre: '',
    nit: '',
    estado: true,
    celular_1: '',
    celular_2: '',
    email: ''
  }
//sidebar menu activation start
menuSidebarActive:boolean=false;
myfunction(){
  if(this.menuSidebarActive==false){
    this.menuSidebarActive=true;
  }
  else {
    this.menuSidebarActive=false;
  }
}
//sidebar menu activation end
  
  constructor() { }

  ngOnInit(): void {}

}

