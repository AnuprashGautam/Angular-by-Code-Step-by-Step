import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currecyConvertor'
})
export class CurrecyConvertorPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    if(args.length==0)
    {
      return value*80;
    }
    else{
      let [exRate]=args;
      return value*exRate;
    }

    return 1;
  }
}
