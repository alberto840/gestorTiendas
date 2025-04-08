import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaProductoAddComponent } from './categoria-producto-add.component';

describe('CategoriaProductoAddComponent', () => {
  let component: CategoriaProductoAddComponent;
  let fixture: ComponentFixture<CategoriaProductoAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriaProductoAddComponent]
    });
    fixture = TestBed.createComponent(CategoriaProductoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
