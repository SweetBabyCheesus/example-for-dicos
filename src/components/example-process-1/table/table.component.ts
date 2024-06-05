import { Component, OnInit, inject } from '@angular/core';
import { Process1Facade } from 'src/libs/facades/process-1.facade';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { customTableData, tableData } from 'src/libs/models/example.model';

@Component({
  selector: 'app-table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
})
export class TableComponent implements OnInit {
  #process1Facade = inject(Process1Facade);
  dataSource: MatTableDataSource<customTableData> = new MatTableDataSource();
  displayedColumns: string[] = [];

  ngOnInit(): void {
    this.displayedColumns = [
      'id',
      'name',
      'username',
      'email',
      'website',
      'buttons',
    ];
    this.getTableDataAndInitForm();
  }

  getTableDataAndInitForm() {
    this.#process1Facade.getTableData().subscribe((response) => {
      console.log(response);
      this.dataSource = new MatTableDataSource(response);
    });
  }

  delete(element: tableData) {
    this.dataSource.data = this.dataSource.data.filter(
      (item) => item.id !== element.id
    );
  }

  deleteAll() {
    this.dataSource = new MatTableDataSource();
  }
}
