import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.scss']
})
export class ProductRatingComponent implements OnInit {
  _items: any;
  starJson: number[] = [1,2,3,4,5];
  constructor() { }
  //@Input() messageToChild: string; 
  @Input()
  public set messageToChild(messageToChild:any) 
  {
    this._items = messageToChild;
  }
  @Output() btnclicked = new EventEmitter<number>();
  

  ngOnInit(): void {
    
  }
  btnclick(value: number){
    console.log('hello',this.messageToChild);
    this.btnclicked.emit(value);
  }

 
}
