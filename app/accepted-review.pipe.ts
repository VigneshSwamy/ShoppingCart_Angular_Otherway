import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'acceptedReview'
})
export class AcceptedReviewPipe implements PipeTransform {

  transform(value: any,args?: any): any {
    console.log("Pipeline called",value);
  }

}
