import { Component, ViewEncapsulation } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.page.html',
  styleUrls: [ './checkout.page.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class CheckoutPage {

  constructor(private snackbar:MdSnackBar) {
  }
  onSubmit(){
    this.snackbar.open("Order submitted", "Retry", {
      duration: 5000
    });
  }

}
