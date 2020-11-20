import { Component, OnInit, Input } from '@angular/core';
// import { ProductService } from './../../../entities/product/product.service';
import { Product } from './../../../shared/model/product.model';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'jhi-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product?: Product;
  faStar = faStar;

  constructor() {}

  ngOnInit(): void {}
}
