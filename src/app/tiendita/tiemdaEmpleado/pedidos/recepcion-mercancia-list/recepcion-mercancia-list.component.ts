import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { recepcionesMercanciaEjemplo } from 'src/app/tiendita/data/recepcionMercanciaData';
import { RecepcionMercancia } from 'src/app/tiendita/models/recepcionMercancia.model';

@Component({
  selector: 'app-recepcion-mercancia-list',
  templateUrl: './recepcion-mercancia-list.component.html',
  styleUrls: ['./recepcion-mercancia-list.component.scss'],
            encapsulation: ViewEncapsulation.None
})
export class RecepcionMercanciaListComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'select',
    'orden_id',
    'fecha_recepcion',
    'cantidad_recibida',
    'cantidad_defectuosa',
    'notas',
    'action',
  ];
  dataSource: MatTableDataSource<RecepcionMercancia>;
  selection = new SelectionModel<RecepcionMercancia>(true, []);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor() {
    // Assign your data array to the data source
    this.dataSource = new MatTableDataSource(recepcionesMercanciaEjemplo);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: RecepcionMercancia): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.id + 1
    }`;
  }

  //sidebar menu activation start
  menuSidebarActive: boolean = false;
  myfunction() {
    if (this.menuSidebarActive == false) {
      this.menuSidebarActive = true;
    } else {
      this.menuSidebarActive = false;
    }
  }
  //sidebar menu activation end

  ngOnInit(): void {}
}