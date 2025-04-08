import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { DetalleVenta } from 'src/app/tiendita/models/detalleVenta.model';

@Component({
  selector: 'app-venta-add',
  templateUrl: './venta-add.component.html',
  styleUrls: ['./venta-add.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VentaAddComponent implements OnInit {
  ventaForm: FormGroup;
  nextId: number = 1;
  //sidebar menu activation start
  menuSidebarActive: boolean = false;
  myfunction() {
    if (this.menuSidebarActive == false) {
      this.menuSidebarActive = true;
    }
    else {
      this.menuSidebarActive = false;
    }
  }

  crearNuevoDetalle(): FormGroup {
    return this.fb.group({
      id: [this.nextId++],
      venta_id: [null],  // Puedes asignar el ID de la venta principal aquí
      producto_id: ['', Validators.required],
      cantidad: [1, [Validators.required, Validators.min(1)]],
      precio_unitario: [0, [Validators.required, Validators.min(0)]],
      lotes_inventario_id: ['', Validators.required]
    });
  }

  agregarDetalle(): void {
    this.detalles.push(this.crearNuevoDetalle());
  }

  eliminarDetalle(index: number): void {
    this.detalles.removeAt(index);
  }

  onSubmit(): void {
    if (this.ventaForm.valid) {
      const detallesVenta: DetalleVenta[] = this.detalles.value;
      console.log('Detalles a guardar:', detallesVenta);
      // Aquí enviarías los datos a tu servicio
      this.ventaForm.reset();
      this.detalles.clear();
      this.nextId = 1;
    }
  }

  get detalles(): FormArray {
    return this.ventaForm.get('detalles') as FormArray;
  }
  // Agrega este método al componente
  calcularTotal(): number {
    return this.detalles.controls.reduce((total, detalle) => {
      const cantidad = detalle.get('cantidad')?.value || 0;
      const precio = detalle.get('precio_unitario')?.value || 0;
      return total + (cantidad * precio);
    }, 0);
  }
  //sidebar menu activation end

  constructor(private fb: FormBuilder) {
    this.ventaForm = this.fb.group({
      detalles: this.fb.array([])
    });
  }

  ngOnInit(): void { }

}
