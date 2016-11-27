import { BookComponent } from './../book/book.component';
import { Component, Input, AfterContentInit, ContentChild } from '@angular/core';

// Our own components and services
import { Section } from '../../types/section';

@Component({
    moduleId: __moduleName,
    selector: 'bs-gallery',
    template: `
        <section class="gallery">
            <ul>
                <li *ngFor="let item of itemComponents | async">
                </li>
            </ul>
        </section>
    `
})
export class GalleryComponent implements AfterContentInit {
    @Input() items: any[];
    @ContentChild(BookComponent) content: any;
    itemComponents: any[];

    ngAfterContentInit(): void {
       content.book. = 

    }
}