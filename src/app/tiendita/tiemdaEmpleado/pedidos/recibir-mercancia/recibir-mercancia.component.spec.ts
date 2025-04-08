import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibirMercanciaComponent } from './recibir-mercancia.component';

describe('RecibirMercanciaComponent', () => {
  let component: RecibirMercanciaComponent;
  let fixture: ComponentFixture<RecibirMercanciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecibirMercanciaComponent]
    });
    fixture = TestBed.createComponent(RecibirMercanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
