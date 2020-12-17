import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MaterialSharedModule } from '../../material-shared/material-shared.module';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatTreeModule} from '@angular/material/tree';
// import { CustomCommonModule } from 'src/app/common/common.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ProductComponent, ProductListComponent, ProductDetailsComponent
  ],
  imports: [
    MaterialSharedModule,
    ProductRoutingModule,
    CdkTreeModule,
    MatTreeModule,
    // CustomCommonModule,
    CommonModule



  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class ProductModule { }