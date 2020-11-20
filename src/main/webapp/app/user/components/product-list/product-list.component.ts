import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../../entities/product/product.service';
import { Product } from './../../../shared/model/product.model';

@Component({
  selector: 'jhi-products-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void {
    this.productService.query().subscribe((res: any) => {
      this.products = res.body;
    });
  }
}
