import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MyNavComponent } from './my-nav/my-nav.component';
import { MyHeroComponent } from './my-hero/my-hero.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
// import { ProductsRoutingModule } from './products/products/products-routing.module'


@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyHeroComponent,
    MyFooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    HttpClientModule,
    UsersModule,
    ProductsModule,
    // ProductsRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
