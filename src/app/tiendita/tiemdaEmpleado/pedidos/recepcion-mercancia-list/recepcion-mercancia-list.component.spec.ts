import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionMercanciaListComponent } from './recepcion-mercancia-list.component';

describe('RecepcionMercanciaListComponent', () => {
  let component: RecepcionMercanciaListComponent;
  let fixture: ComponentFixture<RecepcionMercanciaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepcionMercanciaListComponent]
    });
    fixture = TestBed.createComponent(RecepcionMercanciaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
