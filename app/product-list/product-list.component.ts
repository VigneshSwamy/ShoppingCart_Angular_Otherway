import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import product from './products.json';
import { CartServiceService } from './../cart-service.service';
product.primaryMain



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products:  any  = product;
  cartValue;
  

  constructor(private myservice: CartServiceService) { }
  btnclickalert(alertNumber:number){
    alert(`you have given ${alertNumber} rating`);
  }
 reviews=["Good product", "Nice one"];
 addReview(newReview:string){
  if (newReview) {
    this.reviews.push(newReview);
  }

 }
 updateCartFunction(){  
  console.log("updatefn")
   const x = this.myservice.getCartValue();
   x.subscribe((cartValue)=>{this.cartValue=cartValue});
   console.log("cart",this.cartValue);   
  this.myservice.updateMessage(this.cartValue);
 }
 
  ngOnInit() {
    console.log(product);
  }
  

}

