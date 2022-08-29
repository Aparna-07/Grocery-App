import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryComponent } from './components/category/category.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductsComponent } from './components/products/products.component';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    CategoryComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    ProductsPageComponent,
    ProductsComponent,
    SubCategoryComponent,
    ProductDetailPageComponent,
    ErrorPageComponent,
    RegistrationPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
