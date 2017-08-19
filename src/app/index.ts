import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BananaOrangeComponent } from './banana-orange/banana-orange.component';
import {BananaOrangeModule} from './banana-orange/banana-orange.module';

export * from './banana-orange/banana-orange.component';
export * from './banana-orange/banana-orange.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BananaOrangeComponent,
  ],
  exports: [
    BananaOrangeComponent,
  ]
})
export class AppModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BananaOrangeModule,
      providers: []
    };
  }
}
