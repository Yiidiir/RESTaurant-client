import {Component, OnInit} from '@angular/core';
import {StripeService, Elements, Element as StripeElement, ElementsOptions} from 'ngx-stripe';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StripePaymentService} from '../stripe-payment.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pay-order',
  templateUrl: './pay-order.component.html',
  styleUrls: ['./pay-order.component.css']
})
export class PayOrderComponent implements OnInit {
  elements: Elements;
  card: StripeElement;
  error = false;
  successPay = false;
  orderId = 25;

  elementsOptions: ElementsOptions = {
    locale: 'en'
  };
  stripeTest: FormGroup;

  constructor(
    private fb: FormBuilder,
    private stripeService: StripeService,
    private payService: StripePaymentService,
    private router: Router) {
  }

  ngOnInit() {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.stripeService.elements(this.elementsOptions)
      .subscribe(elements => {
        this.elements = elements;
        // Only mount the element the first time
        if (!this.card) {
          this.card = this.elements.create('card', {
            style: {
              base: {
                iconColor: '#666EE8',
                color: '#31325F',
                lineHeight: '40px',
                fontWeight: 300,
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: '18px',
                '::placeholder': {
                  color: '#CFD7E0'
                }
              }
            }
          });
          this.card.mount('#card-element');
        }
      });
  }

  buy() {
    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card, {name})
      .subscribe(result => {
        if (result.token) {
          const res = result.token;
          const transaction = {
            t_id: res.id,
            payer_name: res.card.name,
            payer_ip: res.client_ip,
            payment_timestamp: res.created,
            card_brand: res.card.brand,
            card_country: res.card.country,
            card_zip: res.card.address_zip,
            card_exp: res.card.exp_month + '/' + res.card.exp_year,
            card_id: res.card.id,
            card_last4: res.card.last4,
          };
          this.payService.generateTransaction(transaction, this.orderId).subscribe(res => {
            console.log(res);
            alert('Payment success!');
            this.router.navigate(['/user/my-orders']);
          });
          // Use the token to create a charge or a customer
          // https://stripe.com/docs/charges
          console.log(result.token);
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }
}
