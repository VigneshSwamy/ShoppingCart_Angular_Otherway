import { Component, OnInit } from '@angular/core';
import { CartServiceService } from './../cart-service.service';
import value from '*.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems = [{"title":"Home","showIcon":true,"cssClass":"none"},{"title":"Contact us","showIcon":true,"cssClass":"fa fa-address-card"},{"title":"Follow us","showIcon":true,"cssClass":"fa fa-twitter"}];
  twoWayBindingValue: string = 'Exxonmobil'; 
  messageFromSibling:string;
  subscription:any;
  
 
  constructor(private myservice: CartServiceService) {}
  ngOnInit() { this.myservice.getMessage()
  .subscribe(mymessage => this.messageFromSibling = mymessage);
  console.log(this.messageFromSibling);
  console.log(this.subscription);
}
 
ngOnDestroy() {
  this.subscription.unsubscribe();
}
   
  cartValueHeader
  
  

}
