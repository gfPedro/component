import { EventEmitter, Type } from '@angular/core';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import IComponent from './component.interface';

export default class ComponentFactory {
  static getComponent<
    T extends { number: number; inputReceived: EventEmitter<any> }
  >(type: number): Type<IComponent<T>> {
    switch (type) {
      case 1:
        return ComponentOneComponent;
      case 2:
        return ComponentTwoComponent;
      default:
        throw new Error('Unknown component');
    }
  }
}
