import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrls: ['./cliente-add.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ClienteAddComponent implements OnInit {
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
