import { Component, Input } from '@angular/core';

// Our own components and services
import { Book } from '../../types/book';

@Component({
    moduleId: __moduleName,
    styles: [`
     a.book {
        text-align: center;
        color: black;
        font-size: 20px;
        font-weight: 600;
        background: aliceblue;
     }
    `],
    selector: 'bs-book',
    template: `
        <a [href]="book.title | lowercase" class="book">
            <img [src]="book.cover"/>
            <div>{{book.title}}</div>
        </a> 
    `
})
export class BookComponent {
    @Input() book: Book;
}