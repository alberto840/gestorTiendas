import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoAddComponent } from './empleado-add.component';

describe('EmpleadoAddComponent', () => {
  let component: EmpleadoAddComponent;
  let fixture: ComponentFixture<EmpleadoAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadoAddComponent]
    });
    fixture = TestBed.createComponent(EmpleadoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
