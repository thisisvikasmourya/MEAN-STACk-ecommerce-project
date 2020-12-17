import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { MaterialSharedModule } from '../../material-shared/material-shared.module';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CustomCommonModule } from 'src/app/common/common.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [OrderComponent, OrderDetailsComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    MaterialSharedModule,
    OrderRoutingModule,
    CustomCommonModule,
    CommonModule

  ]
})
export class OrderModule { }
