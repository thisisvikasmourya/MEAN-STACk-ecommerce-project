import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialSharedModule } from '../../material-shared/material-shared.module';

import { CartRoutingModule } from './cart-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialSharedModule,
    CartRoutingModule
  ]
})
export class CartModule { }
