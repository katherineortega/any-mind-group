import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'reverse'})

export class ReversePipe<T> implements PipeTransform {
  transform(value: Array<T>) {
    return value.slice().reverse();
  }
}
