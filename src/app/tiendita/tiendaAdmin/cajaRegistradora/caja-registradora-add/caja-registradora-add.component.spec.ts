import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaRegistradoraAddComponent } from './caja-registradora-add.component';

describe('CajaRegistradoraAddComponent', () => {
  let component: CajaRegistradoraAddComponent;
  let fixture: ComponentFixture<CajaRegistradoraAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CajaRegistradoraAddComponent]
    });
    fixture = TestBed.createComponent(CajaRegistradoraAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
