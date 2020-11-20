import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { MyHeroComponent } from './my-hero/my-hero.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProdactsDetailComponent } from './prodacts-detail/prodacts-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    
    CarouselComponent,
    MyNavComponent,
    MyHeroComponent,
    MyFooterComponent,
    routingComponents,
    PageNotFoundComponent,
    ProdactsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
