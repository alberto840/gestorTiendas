import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorAddComponent } from './vendedor-add.component';

describe('VendedorAddComponent', () => {
  let component: VendedorAddComponent;
  let fixture: ComponentFixture<VendedorAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendedorAddComponent]
    });
    fixture = TestBed.createComponent(VendedorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
