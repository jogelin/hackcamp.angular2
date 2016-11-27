import { AppService } from './app.service';
import { SectionComponent } from './bs-section.component';
import { MenuBarComponent } from './bs-menubar.component';
import { HeaderComponent } from './bs-header.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent }  from './bs-dashboard.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ DashboardComponent, HeaderComponent, MenuBarComponent, SectionComponent ],
  bootstrap: [ DashboardComponent ],
  providers: [AppService]
})
export class AppModule { }