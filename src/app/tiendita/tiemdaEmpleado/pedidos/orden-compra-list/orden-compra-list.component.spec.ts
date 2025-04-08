import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenCompraListComponent } from './orden-compra-list.component';

describe('OrdenCompraListComponent', () => {
  let component: OrdenCompraListComponent;
  let fixture: ComponentFixture<OrdenCompraListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdenCompraListComponent]
    });
    fixture = TestBed.createComponent(OrdenCompraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
