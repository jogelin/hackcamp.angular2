import { SharedModule } from './../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FilterCategoryComponent } from './filter-category/filter-category.component';
import { BookStoreComponent } from './bookstore/bookstore.component';
import { BookComponent } from './book/book.component';
import { NgModule } from '@angular/core';
import { RoutesModule } from './routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule, RoutesModule, SharedModule],
  declarations: [
    BookComponent,
    BookStoreComponent,
    FilterCategoryComponent,
    SidebarComponent
  ],
  exports: [BookStoreComponent]
})
export class BookstoreModule { }