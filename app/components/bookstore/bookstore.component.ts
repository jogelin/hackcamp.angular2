import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';
import { mockBooks } from '../../mocks/books';
import { categories } from '../../mocks/categories';
import { Book } from '../../types/book';
import { Category } from '../../types/category';

@Component({
    moduleId: __moduleName,
    selector: 'bookstore',
    templateUrl: 'bookstore.template.html',
    providers: [AppService]

})
export class BookStoreComponent implements OnInit {
    books: Promise<Book[]>;
    categories: Promise<Category[]>;
    navClosed: Boolean = true;
    title: string = "Bookstore by Hackages"

    constructor(private appService: AppService) {}

    ngOnInit() {
        this.getCategories();
        this.getBooks();
     }

    getCategories(): void {
        this.categories = this.appService.getAsyncCategories();
    }

    getBooks(): void {
        this.books = this.appService.getAsyncBooks();
    }

    getBookDetail(): void {
        console.log('Will be implemented in the next section');
    }

    changeCategory(selectedCategory: Category): void {
        console.warn('not implemented yet!!');
    }

    filterBooks(category: Category): void {
        console.warn('not implemented yet!!');
    }

    search(): void {
        console.warn('not implemented yet!!');
    }

    toggleSideBar(): void {
        console.warn('not implemented yet!!');
    }
}

