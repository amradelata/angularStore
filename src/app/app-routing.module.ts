import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdactsComponent } from './products/products/products.component';
import { CartComponent } from './products/cart/cart.component';
import { MyHeroComponent } from './my-hero/my-hero.component';
import { LoginFormComponent } from '../app/login-form/login-form.component';
import { SignUpFormComponent } from '../app/sign-up-form/sign-up-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },//this is home page
  { path: 'shop', component: ProdactsComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: SignUpFormComponent },
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
export const routingComponents = [ProdactsComponent, MyHeroComponent, CartComponent, LoginFormComponent, SignUpFormComponent]
// CartComponent,