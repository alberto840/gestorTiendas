import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaAddComponent } from './venta-add.component';

describe('VentaAddComponent', () => {
  let component: VentaAddComponent;
  let fixture: ComponentFixture<VentaAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentaAddComponent]
    });
    fixture = TestBed.createComponent(VentaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
