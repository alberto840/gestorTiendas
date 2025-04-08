import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMermaComponent } from './gestion-merma.component';

describe('GestionMermaComponent', () => {
  let component: GestionMermaComponent;
  let fixture: ComponentFixture<GestionMermaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionMermaComponent]
    });
    fixture = TestBed.createComponent(GestionMermaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
