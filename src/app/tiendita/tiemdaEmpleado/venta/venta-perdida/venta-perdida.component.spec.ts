import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaPerdidaComponent } from './venta-perdida.component';

describe('VentaPerdidaComponent', () => {
  let component: VentaPerdidaComponent;
  let fixture: ComponentFixture<VentaPerdidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentaPerdidaComponent]
    });
    fixture = TestBed.createComponent(VentaPerdidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
