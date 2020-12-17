import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../common/guard/auth.guard';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminGuard } from './guard/admin.guard';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { OrderUpdateComponent } from './admin-order/order-update/order-update.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent  },
  { path: 'category', component: CategoryComponent },
  { path: 'adminproduct', component: AdminProductComponent},
  { path: 'order', component: AdminOrderComponent},
  { path: 'order/:id', component: OrderUpdateComponent},
];


// canActivate: [AuthGuard, AdminGuard] 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
