import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsResolverService } from './shared/products-resolver.service';

const routes: Routes = [  
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'productList',component:ProductListComponent,resolve:ProductsResolverService},
  {path:'about',component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
