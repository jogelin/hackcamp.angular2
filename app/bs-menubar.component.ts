import { Component } from '@angular/core';

@Component({
    selector: 'bs-menubar',
    template: `
        <div class="tab-filter-wrapper">
            <div class="tab-filter">
                <div class="filter-content">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    `,
})
export class MenuBarComponent {
}