import { Book } from './types/book';
import { mockBooks } from './mocks/books';
import { Category } from './types/category';
import { Injectable } from '@angular/core';
import { sections } from './mocks/sections';
import { Section } from './types/section';
import { categories } from './mocks/categories';

@Injectable()
export class AppService {
  getSections(): Section[] {
     return sections; 
  }

  getAsyncSections(): Promise<Section[]> {
     return new Promise((resolve) => {
         setTimeout(() => {
            resolve(sections) 
         }, 20);
     })
  }

  getCategories(): Category[] {
     return categories; 
  }

  getAsyncCategories(): Promise<Category[]> {
     return new Promise((resolve) => {
         setTimeout(() => {
            resolve(categories) 
         }, 2000);
     })
  }

  getBooks(): Book[] {
     return mockBooks; 
  }

  getAsyncBooks(): Promise<Book[]> {
     return new Promise((resolve) => {
         setTimeout(() => {
            resolve(mockBooks) 
         }, 2000);
     })
  }

}