import { AppService } from './../../../app.service';
import { Category } from './../../../types/category';
import { Component, Input } from '@angular/core';
import { Book } from '../../../types/book';
import { ActivatedRoute, Params } from '@angular/router';
import Rx from 'rxjs/Rx';
import 'rxjs/add/operator/combineLatest';


@Component({
    moduleId: __moduleName,
    selector: 'bs-book',
    templateUrl: 'book.template.html'
})
export class BookComponent {
    @Input() navClosed: boolean;
    initialData: { books: any[], categories: any[] } = { books: [], categories: [] };
    books: any[];

    constructor(private appService: AppService, private route: ActivatedRoute) { }

    public ngOnInit() {

        // Get the books
        const books$ = Rx.Observable.from(this.appService.getBooks());
        const params$ = this.route.params;
        Rx.Observable.combineLatest(books$, params$)
            .subscribe(([books, params]) => {
                this.books = books;
                this.initialData.books = books;
                this.filterBooks(params.category);
            });
    }

    filterBooks(category: string): void {
        if (category == undefined || category === "All") {
            this.books = this.initialData.books;
            return;
        }
        this.books = this.initialData.books.filter(book => book.category === category);
    }
}