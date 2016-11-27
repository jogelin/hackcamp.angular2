import { BookstoreModule } from './modules/bookstore/bookstore.module';
import { SharedModule } from './modules/shared/shared.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { RoutesModule } from './routing.module';
import { ShellComponent } from './shell.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [BrowserModule, RoutesModule, SharedModule, DashboardModule, BookstoreModule],
  declarations: [
    ShellComponent
  ],
  bootstrap: [ShellComponent]
})
export class AppModule { }