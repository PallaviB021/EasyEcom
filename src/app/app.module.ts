import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { NewCompnayComponent } from './new-compnay/new-compnay.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button'
import {FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import {MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {AppRoutingModule } from './app-routing.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {HttpClientModule} from '@angular/common/http'
import { CdkColumnDef } from '@angular/cdk/table';





@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    NewCompnayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,


  ],
  providers: [CdkColumnDef],
  bootstrap: [AppComponent]
})
export class AppModule { }
