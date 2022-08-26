import { EventEmitter } from '@angular/core';

export default interface IComponent<
  T extends { number: number; inputReceived: EventEmitter<any> }
> {
  data: T;
}
