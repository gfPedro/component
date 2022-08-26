import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentModule } from './component/component.module';
import { ComponentLoaderDirective } from './component-loader.directive';

@NgModule({
  declarations: [AppComponent, ComponentLoaderDirective],
  imports: [BrowserModule, ComponentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
