import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { APP_CONFIG } from './AppConfig';
// import {Component} from '@angular/core';
import { IAppConfig } from './IAppConfig';
import { environment } from '../../environments/environment';
import { MatDatepickerModule } from '@angular/material/Datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatTableModule}  from '@angular/material/Table';
import {MatDividerModule } from '@angular/material/Divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/Badge';
import {MatSelectModule} from '@angular/material/Select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/Card';
import {MatGridListModule} from '@angular/material/grid-list';




const Appconfig :IAppConfig = {
  apiEndPoint : environment.apiEndPoint
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatDividerModule,
    MatMenuModule,
    MatBadgeModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatCardModule,
    MatGridListModule

    
  ] ,
  providers : [{ provide :APP_CONFIG, useValue:Appconfig}],

  exports : [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatDividerModule,
    MatMenuModule,
    MatBadgeModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatCardModule,
    MatGridListModule



     
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class MaterialSharedModule { } 
