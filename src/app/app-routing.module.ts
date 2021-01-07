import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdactsComponent } from './products/products/products.component';
import { CartComponent } from './cart/cart.component';
import { MyHeroComponent } from './my-hero/my-hero.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },//this is home page
  { path: 'shop', component: ProdactsComponent },

  { path: 'Home', component: MyHeroComponent },
  { path: 'cart', component: CartComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// PageNotFoundComponent
export const routingComponents = [ProdactsComponent, CartComponent, MyHeroComponent,]