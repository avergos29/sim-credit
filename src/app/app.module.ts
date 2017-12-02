import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CreditFormComponent, ResultDialogComponent } from './credit-form/credit-form.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TableHistoryComponent } from './table-history/table-history.component';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule, MatSelectModule, MatButtonModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {TableService} from './table.service';
import { AppService} from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    CreditFormComponent,
    TableHistoryComponent,
    ResultDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
  ],
  providers: [TableService, AppService],
  bootstrap: [AppComponent],
  entryComponents: [ResultDialogComponent]
})
export class AppModule { }
