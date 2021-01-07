import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppComponent } from '../app.component';
import { ProductsRoutingModule } from '../products/products/products-routing.module'
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TShirtComponent } from './t-shirt/t-shirt.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { SuitComponent } from './suit/suit.component';
import { ShoesComponent } from './shoes/shoes.component';
import { ShirtComponent } from './shirt/shirt.component';
import { PantsComponent } from './pants/pants.component';
import { JacketComponent } from './jacket/jacket.component';
import { CoatComponent } from './coat/coat.component';
import { BlazerComponent } from './blazer/blazer.component';
import { ProdactsComponent } from './products/products.component';
import { ProductsnavComponent } from '../products/productsnav/productsnav.component';
import { CarouselComponent } from '../products/carousel/carousel.component'
import { ProdactsDetailComponent } from '../products/prodacts-detail/prodacts-detail.component'



@NgModule({
  declarations: [TShirtComponent,
    SuitComponent,
    ShoesComponent,
    ShirtComponent,
    PantsComponent,
    JacketComponent,
    CoatComponent,
    BlazerComponent,
    ProdactsComponent,
    ProductsnavComponent,
    CarouselComponent,
    ProdactsDetailComponent

  ]

  ,
  imports: [
    CommonModule,
    IvyCarouselModule,

    HttpClientModule,
    BrowserModule,
    ProductsRoutingModule

  ],

  exports: [
    TShirtComponent,
    SuitComponent,
    ShoesComponent,
    ShirtComponent,
    PantsComponent,
    JacketComponent,
    CoatComponent,
    BlazerComponent,
    ProductsnavComponent,
    CarouselComponent,
    ProdactsDetailComponent

  ],
  // bootstrap: [AppComponent]
})
export class ProductsModule { }
