import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import IComponent from '../component.interface';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
})
export class ComponentOneComponent implements OnInit, IComponent<any> {
  @Input() data: any;

  @Output() inputReceived!: EventEmitter<unknown>;

  ngOnInit() {
    console.info(`[${ComponentOneComponent.name}] data received:`, this.data);
    this.inputReceived = this.data.inputReceived;
    this.inputReceived.emit(this.data);
  }
}
