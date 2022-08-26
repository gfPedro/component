import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';

@NgModule({
  declarations: [ComponentOneComponent, ComponentTwoComponent],
  imports: [CommonModule],
  exports: [ComponentOneComponent, ComponentTwoComponent],
})
export class ComponentModule {}
