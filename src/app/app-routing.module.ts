import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDisplayComponent } from './emart/item/item-display/item-display.component';
import { ItemListComponent } from './emart/item/item-list/item-list.component';
import { CartListComponent } from './emart/cart/cart-list/cart-list.component';
import { BillViewComponent } from './emart/bill/bill-view/bill-view.component';
import { BillListComponent } from './emart/bill/bill-list/bill-list.component';
import { LoginComponent } from './emart/user/login/login.component';
import { LogoutComponent } from './emart/user/logout/logout.component';
import { BuyerSignupComponent } from './emart/user/buyer-signup/buyer-signup.component';
import { SellerSignupComponent } from './emart/user/seller-signup/seller-signup.component';
import { SellerItemsComponent } from './emart/item/seller-items/seller-items.component';
import { SellerAddItemComponent } from './emart/item/seller-add-item/seller-add-item.component';

const routes: Routes = [{
                          path: '',
                          component: LoginComponent
                        },
                        {
                          path: 'log-out',
                          component: LogoutComponent
                        },
                        {
                          path: 'item-display/:iId',
                          component: ItemDisplayComponent
                        },
                        {
                          path: 'item-list',
                          component: ItemListComponent
                        },
                        {
                          path: 'cart-list',
                          component: CartListComponent
                        },
                        {
                          path: 'bill-view',
                          component: BillViewComponent
                        },
                        {
                          path: 'bill-list',
                          component: BillListComponent
                        },
                        {
                          path: 'buyer-signup',
                          component: BuyerSignupComponent
                        },
                        {
                          path: 'seller-signup',
                          component: SellerSignupComponent
                        },
                        {
                          path: 'seller-items',
                          component: SellerItemsComponent
                        },
                        {
                          path: 'seller-add-item',
                          component: SellerAddItemComponent
                        }
                      ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
