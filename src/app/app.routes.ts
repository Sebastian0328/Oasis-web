import { Routes } from '@angular/router';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
  {path:"", component:HomeComponent},
  {
  path: "products", component: ProductPageComponent
}];
