import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-vendedor-add',
  templateUrl: './vendedor-add.component.html',
  styleUrls: ['./vendedor-add.component.scss'],
      encapsulation: ViewEncapsulation.None
})
export class VendedorAddComponent implements OnInit {
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

