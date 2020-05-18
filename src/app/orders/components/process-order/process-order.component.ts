import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private orderService: OrderService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      ['name']: new FormControl('', {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      ['email']: new FormControl('', {
        validators: [Validators.required, Validators.email]
      })
    });
  }

  onSave(): void {
    console.log(`Saved: ${JSON.stringify(this.form.value)}`);
    this.orderService.createOrder(this.form.value.name, this.form.value.email);
    this.router.navigate(['/orders']);
  }
}
