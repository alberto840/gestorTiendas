import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Producto } from 'src/app/tiendita/models/producto.model';

@Component({
  selector: 'app-producto-add',
  templateUrl: './producto-add.component.html',
  styleUrls: ['./producto-add.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductoAddComponent implements OnInit {
  producto: Producto = {
    categoria_id: 0,
    sku: '',
    nombre: '',
    unidad_medida: '',
    costo_promedio: 0,
    precio_actual: 0,
    estado: false,
    marca: ''
  }
  //sidebar menu activation start
  menuSidebarActive: boolean = false;
  myfunction() {
    if (this.menuSidebarActive == false) {
      this.menuSidebarActive = true;
    }
    else {
      this.menuSidebarActive = false;
    }
  }
  //sidebar menu activation end

  constructor() { }

  ngOnInit(): void { }

}


