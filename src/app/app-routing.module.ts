import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent, canActivate: [AuthGuard]},
  {path: 'products/:catId', component: ProductsPageComponent, canActivate: [AuthGuard]},
  {path: 'products/details/:id', component: ProductDetailPageComponent, canActivate: [AuthGuard]},
  {path: 'about', component: AboutPageComponent, canActivate: [AuthGuard]},
  {path: 'contact', component: ContactPageComponent},
  {path: 'register', component: RegistrationPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: '**', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
