import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ComponentLoaderDirective } from './component-loader.directive';
import ComponentFactory from './component/component.factory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild(ComponentLoaderDirective, { static: true })
  adHost!: ComponentLoaderDirective;

  title = 'component';

  number: number = 1;
  eventEmitter: EventEmitter<any> = new EventEmitter();
  subscriptions: Subscription[] = [];

  ngOnInit() {
    this.test(this.number);
    this.subscriptions.push(this.eventEmitter.subscribe(this.handleEvent));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  test(number: number) {
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(
      ComponentFactory.getComponent(number)
    );
    componentRef.instance.data = { number, inputReceived: this.eventEmitter };
  }

  changeNumber() {
    this.number = this.number !== 1 ? 1 : 2;
    this.test(this.number);
  }

  handleEvent(event: unknown) {
    console.info(`[${AppComponent.name}] event received:`, event);
  }
}
