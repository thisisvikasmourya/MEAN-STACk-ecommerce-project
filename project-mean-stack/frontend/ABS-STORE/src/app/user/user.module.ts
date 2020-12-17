// import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { MaterialSharedModule } from '../material-shared/material-shared.module';
import { CustomCommonModule } from '../common/common.module';
import { ProductModule } from './product/product.module';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [UserDashboardComponent, ProfileComponent,ProfileEditComponent, WishlistComponent, OrderComponent, CartComponent, PaymentComponent, ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
   ProductModule,
   CommonModule,
    CustomCommonModule,
    UserRoutingModule,
    MaterialSharedModule,
    
  ]
})
export class UserModule { }
