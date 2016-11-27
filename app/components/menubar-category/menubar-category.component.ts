import { Category } from './../../types/category';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: __moduleName,
    selector: 'bs-menubar-category',
    template: `
        <bs-menubar>
            <ul>
                <li *ngIf="loading">Loading...</li>
                <template [ngIf]="!loading">
                    <li class="placeholder">
                        <a data-type="all" href="#0">All</a>
                    </li>
                    <li *ngFor="let category of categories | async" (click)="changeCategory(category)">
                        <a class.selected="category.selected" href="#0">{{ category.name }}</a>
                    </li>
                </template>
            </ul>

        </bs-menubar>
    `
})
export class MenubarCategoryComponent implements OnInit {
    @Input() categories: Promise<Category[]>;
    loading: boolean = true;

    ngOnInit() {
        this.categories.then(() => this.loading = false);
    }


}