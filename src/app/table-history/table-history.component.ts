import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Data, AppService } from "../app.service";

@Component({
  selector: "app-table-history",
  templateUrl: "./table-history.component.html",
  styleUrls: ["./table-history.component.css"]
})
export class TableHistoryComponent implements OnInit {
  displayedColumns = ["prix", "apport", "taux", "duree", "mensualite"];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: AppService) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.service
      .loadData()
      .subscribe((res: Data[]) => (this.dataSource.data = res));
  }
}
