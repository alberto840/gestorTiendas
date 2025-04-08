import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Personal } from '../../models/personal.model';

@Component({
  selector: 'app-empleado-add',
  templateUrl: './empleado-add.component.html',
  styleUrls: ['./empleado-add.component.scss'],
        encapsulation: ViewEncapsulation.None
})
export class EmpleadoAddComponent implements OnInit {
  empleado: Personal = {
    tienda_id: 0,
    nombre: '',
    rol_id: 0
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

