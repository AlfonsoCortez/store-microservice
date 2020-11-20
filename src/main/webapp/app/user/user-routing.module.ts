import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { InterestedComponent } from './components/interested/interested.component';
import { RatingComponent } from './components/rating/rating.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'producto/:id',
    component: ProductDetailComponent
  },
  {
    path: 'producto/interested/:id',
    component: InterestedComponent
  },
  {
    path: 'producto/rating/:id',
    component: RatingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class UserRoutingModule {}
