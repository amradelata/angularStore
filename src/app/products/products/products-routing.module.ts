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
const routes: Routes = [

  { path: 'shop/:id', component: ProdactsDetailComponent },
  { path: 'blazer', component: BlazerComponent },
  { path: 'coat', component: CoatComponent },
  { path: 'jacket', component: JacketComponent },
  { path: 'shirt', component: ShirtComponent },
  { path: 'shoes', component: ShoesComponent },
  { path: 'suit', component: SuitComponent },
  { path: 'tshirt', component: TShirtComponent },
  { path: 'pants', component: PantsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

export const routingComponents = [ProdactsDetailComponent, BlazerComponent, CoatComponent, JacketComponent, ShirtComponent, ShoesComponent, SuitComponent, TShirtComponent, PantsComponent, PageNotFoundComponent]