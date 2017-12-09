import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {
  CreditFormComponent,
  ResultDialogComponent,
} from './credit-form/credit-form.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TableHistoryComponent } from './table-history/table-history.component';
import { MatTableModule } from '@angular/material/table';
import {
  MatDialogModule,
  MatSelectModule,
  MatButtonModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
} from '@angular/material';
import { AppService } from './app.service';
import { NavigationComponent } from './navigation/navigation.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
const appRoutes: Routes = [
  { path: 'sim', component: CreditFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'history', component: TableHistoryComponent },
  {
    path: '',
    redirectTo: '/sim',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CreditFormComponent,
    TableHistoryComponent,
    ResultDialogComponent,
    NavigationComponent,
    NavBarComponent,
    LoginComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false, useHash: true } // <-- debugging purposes only
    ),
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
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    FormsModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  entryComponents: [ResultDialogComponent],
})
export class AppModule {}
