import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { InterestedComponent } from './components/interested/interested.component';
import { RatingComponent } from './components/rating/rating.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [HomeComponent, ProductListComponent, ProductCardComponent, ProductDetailComponent, InterestedComponent, RatingComponent],
  imports: [CommonModule, FontAwesomeModule, UserRoutingModule, FormsModule, RouterModule, ReactiveFormsModule]
  // exports: [HomeComponent, ProductListComponent, ProductCardComponent, ProductDetailComponent]
})
export class UserModule {}
