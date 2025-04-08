import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVentaListComponent } from './detalle-venta-list.component';

describe('DetalleVentaListComponent', () => {
  let component: DetalleVentaListComponent;
  let fixture: ComponentFixture<DetalleVentaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleVentaListComponent]
    });
    fixture = TestBed.createComponent(DetalleVentaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
