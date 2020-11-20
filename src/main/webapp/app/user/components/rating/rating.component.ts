import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from './../../../entities/product/product.service';
import { IProduct, Product } from './../../../shared/model/product.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'jhi-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  product!: Product | any;
  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.productService.find(id).subscribe(res => {
        this.product = res.body;
      });
    });
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      rating: ['', [Validators.required]]
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateProduct(event: any): void {
    const updateProduct: IProduct = {
      id: this.product.id,
      name: this.product.name,
      description: this.product.description,
      price: this.product.price,
      size: this.product.size,
      image: this.product.image,
      imageContentType: this.product.imageContentType,
      recommended: this.form.value.rating,
      productCategory: this.product.productCategory
    };

    this.productService.update(updateProduct).subscribe(value => console.warn(value));
    this.router.navigate(['./productlist']);
  }
}
