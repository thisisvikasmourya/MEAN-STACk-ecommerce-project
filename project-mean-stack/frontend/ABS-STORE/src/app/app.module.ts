import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA, ErrorHandler} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http'
// import { NgxPayPalModule } from 'ngx-paypal';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialSharedModule } from './material-shared/material-shared.module';
import { CustomCommonModule } from './common/common.module';
import {CustomInterceptorService} from './common/custom-interceptor/custom-interceptor.service'
import { ErrorHandlerService } from './common/error-handler/error-handler.service';
import { CommonModule } from '@angular/common';
import { UfooterComponent } from './ufooter/ufooter.component';

@NgModule({
  declarations: [
    AppComponent,
    UfooterComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialSharedModule,
    CustomCommonModule,
    CommonModule,
    // NgxPayPalModule
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
,
  providers: [
    { provide:HTTP_INTERCEPTORS, useClass :CustomInterceptorService,multi:true } ,
    { provide: ErrorHandler, useClass: ErrorHandlerService }

    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
