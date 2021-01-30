import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
cartValue = 0;
cartValueHeader = 0;
  constructor() { }
  updateCartService(){
    return ++this.cartValue; 
    }
    public getCartValue(): any {
      const cartValueObservable = new Observable(observer => {
             observer.next(++this.cartValueHeader)
             console.log("observable");
             observer.complete();
      });
      return cartValueObservable;
}
  x = new Observable(
    
    observer => {
      observer.next(++this.cartValueHeader)}
);

private myMessage = new BehaviorSubject ("0");
getMessage(): Observable<string> {
  return this.myMessage.asObservable();
}
updateMessage(message: string) {
  this.myMessage.next(message);
}
}
