import { Component, OnInit } from '@angular/core';
import { Product } from './../../../shared/model/product.model';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from './../../../entities/product/product.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'jhi-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product!: Product | any;
  faStar = faStar;
  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.productService.find(id).subscribe(res => {
        this.product = res.body;
        console.warn(this.product);
      });
    });
  }
}
