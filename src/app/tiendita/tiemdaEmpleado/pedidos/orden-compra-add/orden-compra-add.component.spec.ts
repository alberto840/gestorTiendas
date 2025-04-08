import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenCompraAddComponent } from './orden-compra-add.component';

describe('OrdenCompraAddComponent', () => {
  let component: OrdenCompraAddComponent;
  let fixture: ComponentFixture<OrdenCompraAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdenCompraAddComponent]
    });
    fixture = TestBed.createComponent(OrdenCompraAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
