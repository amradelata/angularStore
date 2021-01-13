import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdactsDetailComponent } from '../prodacts-detail/prodacts-detail.component';
import { BlazerComponent } from '../blazer/blazer.component';
import { CoatComponent } from '../coat/coat.component';
import { JacketComponent } from '../jacket/jacket.component';
import { PantsComponent } from '../pants/pants.component';
import { ShirtComponent } from '../shirt/shirt.component';
import { ShoesComponent } from '../shoes/shoes.component';
import { SuitComponent } from '../suit/suit.component';
import { TShirtComponent } from '../t-shirt/t-shirt.component';
import { PageNotFoundComponent } from '../../page-not-found/page-not-found.component';
import { CartComponent } from '../cart/cart.component';
const routes: Routes = [

  { path: 'shop/:id', component: ProdactsDetailComponent },
  { path: 'Blazer', component: BlazerComponent },
  { path: 'Coat', component: CoatComponent },
  { path: 'Jacket', component: JacketComponent },
  { path: 'Shirt', component: ShirtComponent },
  { path: 'Shoes', component: ShoesComponent },
  { path: 'Suit', component: SuitComponent },
  { path: 'T-shirt', component: TShirtComponent },
  { path: 'Pants', component: PantsComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

export const routingComponents = [ProdactsDetailComponent, BlazerComponent, CoatComponent, JacketComponent, ShirtComponent, ShoesComponent, SuitComponent, TShirtComponent, PantsComponent, PageNotFoundComponent, CartComponent]