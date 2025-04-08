import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-orden-compra-add',
  templateUrl: './orden-compra-add.component.html',
  styleUrls: ['./orden-compra-add.component.scss'],
      encapsulation: ViewEncapsulation.None
})
export class OrdenCompraAddComponent implements OnInit {
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

