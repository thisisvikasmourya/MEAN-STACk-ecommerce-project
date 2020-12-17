import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { MaterialSharedModule } from '../material-shared/material-shared.module';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { AdminOrderListComponent } from './admin-order/admin-order-list/admin-order-list.component';
import { OrderUpdateComponent } from './admin-order/order-update/order-update.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { ProductAddComponent } from './admin-product/product-add/product-add.component';
import { ProductListComponent } from './admin-product/product-list/product-list.component';
import { CustomCommonModule } from '../common/common.module';


@NgModule({
  declarations: [DashboardComponent, CategoryComponent, CategoryAddComponent, CategoryListComponent, AdminOrderComponent, AdminOrderListComponent, OrderUpdateComponent, AdminProductComponent, ProductAddComponent, ProductListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialSharedModule,
    CustomCommonModule,


  ]
})
export class AdminModule { }
