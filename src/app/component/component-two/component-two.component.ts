import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import IComponent from '../component.interface';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
})
export class ComponentTwoComponent implements OnInit, IComponent<any> {
  @Input() data: any;

  @Output() inputReceived!: EventEmitter<unknown>;

  ngOnInit() {
    console.info(`[${ComponentTwoComponent.name}] data received:`, this.data);
    this.inputReceived = this.data.inputReceived;
    this.inputReceived.emit(this.data);
  }
}
