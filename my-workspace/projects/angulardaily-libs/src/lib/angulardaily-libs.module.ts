import { NgModule } from '@angular/core';
import { AngulardailyLibsComponent } from './angulardaily-libs.component';
import { AngulardailyHeaderComponent } from './components/angulardaily-header.component';

@NgModule({
  declarations: [AngulardailyLibsComponent, AngulardailyHeaderComponent],
  imports: [
  ],
  exports: [AngulardailyLibsComponent, AngulardailyHeaderComponent]
})
export class AngulardailyLibsModule { }
