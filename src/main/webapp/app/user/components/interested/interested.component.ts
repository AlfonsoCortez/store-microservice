import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../../entities/product/product.service';
import { CustomerService } from './../../../entities/customer/customer.service';
import { NotificationService } from './../../../entities/notification/notification/notification.service';
import { Product } from './../../../shared/model/product.model';
import { INotification } from './../../../shared/model/notification/notification.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'jhi-interested',
  templateUrl: './interested.component.html',
  styleUrls: ['./interested.component.scss']
})
export class InterestedComponent implements OnInit {
  product!: Product | any;
  form!: FormGroup;
  DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private customerService: CustomerService,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder
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
      nameField: ['', [Validators.required]],
      date: [null, [Validators.required]],
      messageField: ['', [Validators.required]],
      sentDate: [null, [Validators.required]],
      format: ['EMAIL'],
      userId: [],
      productId: []
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createMessage(event: any): void {
    const notification: INotification = {
      date: moment(this.form.get(['date'])!.value, this.DATE_TIME_FORMAT),
      details: this.form.value.messageField,
      sentDate: moment(this.form.get(['sentDate'])!.value, this.DATE_TIME_FORMAT),
      format: this.form.value.format,
      userId: 0,
      productId: this.product.id
    };
    this.customerService.query().subscribe((res: any) => {
      for (let i = 0; i < res.body.length + 1; i++) {
        const customerName = res.body[i].firstName;
        if (this.form.value.nameField.toLowerCase() === customerName.toLowerCase()) {
          notification.userId = res.body[i].id;
          this.notificationService.create(notification).subscribe(value => console.warn(value));
          this.router.navigate(['./productlist']);
        }
      }
    });
  }
}
