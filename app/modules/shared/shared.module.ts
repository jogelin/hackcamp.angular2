import { MenubarComponent } from './menubar/menubar.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule],
  declarations: [
    HeaderComponent,
    MenubarComponent
  ],
  exports: [HeaderComponent, MenubarComponent]
})
export class SharedModule { }