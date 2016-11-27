import { GalleryItemComponent } from './components/gallery-item/gallery-item.component';
import { BookComponent } from './components/book/book.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MenubarCategoryComponent } from './components/menubar-category/menubar-category.component';
import { BookStoreComponent } from './components/bookstore/bookstore.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent }  from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { SectionComponent } from './components/section/section.component';



@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    MenubarComponent,
    SectionComponent,
    BookStoreComponent,
    MenubarCategoryComponent,
    GalleryComponent,
    BookComponent,
    GalleryItemComponent
  ],
  bootstrap: [ BookStoreComponent ]
})
export class AppModule { }