import { SharedModule } from './../shared/shared.module';
import { SectionComponent } from './section/section.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RoutesModule } from './routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule, RoutesModule, SharedModule],
  declarations: [
    DashboardComponent,
    SectionComponent
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }