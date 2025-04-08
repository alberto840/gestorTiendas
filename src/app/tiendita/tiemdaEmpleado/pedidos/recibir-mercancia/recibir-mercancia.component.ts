import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-recibir-mercancia',
  templateUrl: './recibir-mercancia.component.html',
  styleUrls: ['./recibir-mercancia.component.scss'],
              encapsulation: ViewEncapsulation.None
})
export class RecibirMercanciaComponent implements OnInit {
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

