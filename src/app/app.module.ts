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
// import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { FormsModule } from '@angular/forms'
// import { ProductsRoutingModule } from './products/products/products-routing.module'


@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyHeroComponent,
    MyFooterComponent,
    PageNotFoundComponent,
    LoginFormComponent,
    SignUpFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    HttpClientModule,
    // UsersModule,
    ProductsModule,
    FormsModule
    // ProductsRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
