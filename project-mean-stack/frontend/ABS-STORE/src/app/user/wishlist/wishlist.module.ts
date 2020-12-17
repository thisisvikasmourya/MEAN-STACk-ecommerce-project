import { NgModule } from '@angular/core';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistComponent } from './wishlist.component';
import { MaterialSharedModule } from '../../material-shared/material-shared.module';
import { CustomCommonModule } from 'src/app/common/common.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [WishlistComponent],
  imports: [
    MaterialSharedModule ,
    WishlistRoutingModule,
    CustomCommonModule,
CommonModule
  ]
})
export class WishlistModule { }

