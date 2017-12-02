import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { TableService} from '../table.service';
import { Data } from '../app.service';

@Component({
  selector: 'app-table-history',
  templateUrl: './table-history.component.html',
  styleUrls: ['./table-history.component.css']
})
export class TableHistoryComponent implements OnInit {
  displayedColumns = ['prix', 'apport', 'taux', 'duree', 'mensualite'];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private tableService: TableService) {}

  ngAfterViewInit() {
    console.log("sort", this.sort);
    console.log("this.paginator", this.paginator);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.tableService.getData().subscribe(
      (res: Data[]) => this.dataSource.data = res);
  }

}
