import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { MyHeroComponent } from './my-hero/my-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    MyNavComponent,
    MyHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
