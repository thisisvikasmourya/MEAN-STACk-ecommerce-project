import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common/';

import { CommonRoutingModule } from './common-routing.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LoginComponent } from './login/login.component';
import { MaterialSharedModule } from '../material-shared/material-shared.module';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    MainNavComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
   CommonRoutingModule,
    MaterialSharedModule
  ],
  exports : [
    MainNavComponent,
    LoginComponent
  ]
})
export class CustomCommonModule { }
