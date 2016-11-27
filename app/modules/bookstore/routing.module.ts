import { BookComponent } from './book/book.component';
import { BookStoreComponent } from './bookstore/bookstore.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'books',
    component: BookStoreComponent,
    data: {
      title: 'Bookstore by Hackages'
    },
    children: [
      {
        path: '',
        component: BookComponent,
      },
      {
        path: ':category',
        component: BookComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutesModule { }