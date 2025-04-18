import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css'
})
export class CartComponent {
    items = this.cartService.getItems();

    checkOutForm = this.formBuilder.group({
        name: '',
        address: '',
    });

    constructor(
        private cartService: CartService,
        private formBuilder: FormBuilder,
    ) { }

    onSubmit(): void {
        this.items = this.cartService.clearCart();
        
        console.warn('Your order has been submitted', this.checkOutForm.value);
        this.checkOutForm.reset();
    }
}
