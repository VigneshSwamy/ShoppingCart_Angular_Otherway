import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FormsModule } from "@angular/forms";
import { ProductRatingComponent } from './product-list/product-rating/product-rating.component';
import { ProductGreyHighlightDirective } from './product-grey-highlight.directive';
import { AcceptedReviewPipe } from './accepted-review.pipe';
import { CartServiceService } from './cart-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    CarouselComponent,
    ProductRatingComponent,
    ProductGreyHighlightDirective,
    AcceptedReviewPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CartServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
