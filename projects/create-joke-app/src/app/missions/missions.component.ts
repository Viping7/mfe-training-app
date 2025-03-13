import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  _ColumnFilterModule,
  ClientSideRowModelModule,
  DateFilterModule,
  Module,
  NumberFilterModule,
  PaginationModule,
  TextFilterModule,
  type CellValueChangedEvent,
  type ColDef,
  type GridReadyEvent,
  type ICellRendererParams,
  type RowSelectionOptions,
  type SelectionChangedEvent,
  type ValueFormatterParams,
} from 'ag-grid-community';
import { IRow } from '../models/table.type';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-missions',
  imports: [AgGridAngular, MatCardModule],
  templateUrl: './missions.component.html',
  styleUrl: './missions.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
})
export class MissionsComponent {
  modules: Module[] = [
    ClientSideRowModelModule,
    PaginationModule,
    _ColumnFilterModule,
    TextFilterModule,
    DateFilterModule,
    NumberFilterModule,
  ];

  constructor(private http: HttpClient) {}

  dateFormatter(params: ValueFormatterParams) {
    return new Date(params.value).toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  rowData: IRow[] = [];

  colDefs: ColDef[] = [
    {
      field: 'mission',
      width: 150,
    },
    {
      field: 'company',
      width: 130,
    },
    {
      field: 'location',
      width: 225,
    },
    {
      field: 'date',
      valueFormatter: this.dateFormatter,
    },
    {
      field: 'price',
      width: 130,
      valueFormatter: (params) => {
        return '£' + params.value.toLocaleString();
      },
    },
    {
      field: 'successful',
      width: 120,
    },
    { field: 'rocket' },
  ];

  rowSelection: RowSelectionOptions = {
    mode: 'multiRow',
    headerCheckbox: false,
  };

  defaultColDef: ColDef = {
    filter: true,
  };

  onGridReady(params: GridReadyEvent) {
    this.http
      .get<any[]>(
        'https://www.ag-grid.com/example-assets/space-mission-data.json'
      )
      .subscribe((data) => (this.rowData = data));
  }

  onSelectionChanged = (event: SelectionChangedEvent) => {
    console.log('Row Selected!');
  };
}
