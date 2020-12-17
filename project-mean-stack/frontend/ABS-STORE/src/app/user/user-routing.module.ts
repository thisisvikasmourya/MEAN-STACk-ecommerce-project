import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
// import { AuthGuard } from '../common/guard/auth.guard';

import { ProfileComponent } from './profile/profile.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailsComponent } from './order/order-details/order-details.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';



const routes: Routes = [
  { path: 'dashboard', component: UserDashboardComponent,  },
  { path: 'profile', component: ProfileComponent, },
  { path: 'profile/edit', component: ProfileEditComponent, },
  { path: 'product', component: ProductListComponent, },
  { path: 'product/:id', component: ProductDetailsComponent, },
  { path: 'userorder', component: OrderComponent },
  { path: 'userorder/:id', component: OrderDetailsComponent },
  { path: 'wishlist', component: WishlistComponent, },
  { path: 'cart', component: CartComponent,  },
  { path: 'payment', component: PaymentComponent,  }


// { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard, UserGuard] }
];

// canActivate: [AuthGuard, UserGuard]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
