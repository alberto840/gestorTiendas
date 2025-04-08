import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorAddComponent } from './proveedor-add.component';

describe('ProveedorAddComponent', () => {
  let component: ProveedorAddComponent;
  let fixture: ComponentFixture<ProveedorAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProveedorAddComponent]
    });
    fixture = TestBed.createComponent(ProveedorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
