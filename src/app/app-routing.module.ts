import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ReuseComponent } from './reuse/reuse.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductViewComponent } from './product-view/product-view.component';


const routes: Routes = [
  {path: '', redirectTo: 'two', pathMatch: 'full'},
  {path: 'two', component: ChildTwoComponent},
  {path: 'productList', component: ReuseComponent},
  {path: 'product/:id', component: ProductViewComponent},
  {path: '**', component: PageNotFoundComponent}
];

// Order of route definitions is very important

// Some of the important things in Routing
//  - Route params (passing a specific id of the product/entity)
// - Route guards (gurading your app routes/ deactivate your view) -  CanActivate, Deactivate, canLoad

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
